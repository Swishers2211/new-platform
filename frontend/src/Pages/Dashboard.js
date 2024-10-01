import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import financeIcon from "../Images/finance.png";
import ratingIcon from "../Images/rating.png";
import profileIcon from "../Images/profile-user.png";
import LoadingInd from '../Components/Loading';
import Footer from '../Components/Footer';
import "../Css/Dashboard.css";
import apiClient from "../axiosConfig";

const Card = ({ title, text, link, children }) => (
  <div className="card">
    {link ? (
      <Link to={link}>
        <h2>{title}</h2>
        {children}
      </Link>
    ) : (
      <>
        <h2>{title}</h2>
        {children}
      </>
    )}
    {text && <p>{text}</p>}
  </div>
);

const Dashboard = () => {
  const { userId } = useParams();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const isOwner = currentUserId === parseInt(userId);

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      try {
        const response = await apiClient.get('/user/api/check_auth/', { withCredentials: true });
        setCurrentUserId(response.data.user_id);
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error('Ошибка проверки авторизации:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserProfile = async () => {
      try {
        const response = await apiClient.get(`/user/api/${userId}/`, { withCredentials: true });
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Ошибка получения профиля:', error);
      }
    };

    if (userId) {
      fetchAuthenticatedUser();
      fetchUserProfile();
    }
  }, [userId]);

  const handleLogout = async () => {
    const csrfToken = getCookie('csrftoken');
    try {
      await apiClient.post('/user/api/logout/', {}, {
        withCredentials: true,
        headers: { 'X-CSRFToken': csrfToken }
      });
      window.location.href = '/';
    } catch (error) {
      console.error("Ошибка при выходе:", error.response?.data || error.message);
    }
  };

  const getCookie = (name) => {
    const cookieValue = document.cookie.split(';').map(cookie => cookie.trim()).find(cookie => cookie.startsWith(`${name}=`));
    return cookieValue ? decodeURIComponent(cookieValue.split('=')[1]) : null;
  };

  return (
    <>
      {loading ? (
        <LoadingInd />
      ) : isAuthenticated ? (
        <>
          <p className="page-name-dashboard">Главная / Меню</p>
          <div className="dashboard">
            <Card link={isOwner ? "/finance" : null}>
              <div className="card-finance">
                <img src={financeIcon} alt="Финансы" />
                <h3>Финансы</h3>
              </div>
              <div className="card-finance-desc">
                <p>Последняя продажа <span>01.01.2024</span></p>
                {isOwner ? (<p>Баланс <span>10 000₽</span></p>) : (<p>Баланс <span>######</span></p>)}
              </div>
            </Card>

            <div className="card">
              <Link to={isOwner ? '/ep/' : null}>
                <div className="card-profile">
                  <img src={profileIcon} alt="Профиль" className="profile-pic" />
                  <div className="profile-info">
                    <h3>{username}</h3>
                    <Link className="card-profile-premium" to="/premium">Premium</Link>
                  </div>
                </div>
              </Link>
                <div className="card-profile-desc">
                  <p>Email {isOwner ? (<><span>{email}</span><button onClick={handleLogout}>Выйти</button></>) : (<span>##############</span>)}</p>
                </div>
            </div>

            <Card>
              <div className="card-rating">
                <img src={ratingIcon} alt="Рейтинг" />
                <h3>Рейтинг</h3>
              </div>
              <div className="card-rating-desc">
                <p>Рейтинг {isOwner ? 'Ваш' : username} <span>5.0</span></p>
                <p>Всего отзывов <span>50</span></p>
              </div>
            </Card>

            <div className="grid">
              <Card link="/purchases">
                <div className="card-purchase">
                  <h3>Покупки</h3>
                </div>
                <div className="card-purchase-desc"><p>Количество <span>150</span></p></div>
              </Card>

              <Card link="/sales">
                <div className="card-sales">
                  <h3>Продажи</h3>
                </div>
                <div className="card-sales-desc"><p>Количество <span>150</span></p></div>
              </Card>

              <Card link="/listed">
                <div className="card-listed">
                  <h3>Выставленные</h3>
                </div>
                <div className="card-listed-desc"><p>Смотреть <span>12</span></p></div>
              </Card>

              {isOwner && (
                <Card link="/profile">
                  <div className="card-payments-methods">
                    <h3>Способ оплаты</h3>
                  </div>
                  <div className="card-payments-methods-desc"><p>SberPay: 3577</p></div>
                </Card>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="log-in-first">
          <p>Сначала авторизуйтесь</p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
