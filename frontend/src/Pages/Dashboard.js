import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import { useParams } from "react-router-dom";

import financeIcon from "../Images/finance.png"
import ratingIcon from "../Images/rating.png"
import profileIcon from "../Images/profile-user.png"

import "../Css/Dashboard.css"
import apiClient from "../axiosConfig";

const Card = ({ title, text, link, children }) => {
  return (
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
};

const Dashboard = () => { 
    const { userId } = useParams();
    const [username , setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [currentUserId, setCurrentUserId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isOwner = currentUserId === parseInt(userId);

    useEffect(() => {
      const fetchAuthenticatedUser = async () => {
        try {
          const response = await apiClient.get('/user/api/check_auth/', { withCredentials: true });
          setCurrentUserId(response.data.user_id);
          if (response.data.isAuthenticated === true) {
            setIsAuthenticated(true);
          }else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error('Ошибка проверки авторизации:', error);
        }
      };
      if (userId) {
          const fetchUserProfile = async () => {
              try {
                  const response = await apiClient.get(`/user/api/${userId}/`, { withCredentials: true, });
                  console.log(response.data);
                  setNickname(response.data.username);
                  setEmail(response.data.email);
              } catch (error) {
                  console.error('Ошибка получения профиля:', error);
              }
          };
          fetchAuthenticatedUser();
          fetchUserProfile();
      }
  }, [userId]);

  const handleLogout = async () => {
    const csrfToken = getCookie('csrftoken');
    try {
        await apiClient.post('/user/api/logout/', {},
            {
              withCredentials: true,
              headers: {
                  'X-CSRFToken': csrfToken
              }
            }
        );

        window.location.href = '/';
    } catch (error) {
        console.error("Ошибка при выходе:", error.response ? error.response.data : error.message);
    }
};

// Утилитная функция для получения токена CSRF из cookies
const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Проверяем, начинается ли эта строка cookie с нужного имени
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;

};
  return (
    <>
      {isAuthenticated ? (
        <>
        <p className="page-name-dashboard">Главная / Меню</p>
        <div className="dashboard">
          {isOwner ? (
            <Card link="/finance">
              <div className="card-finance">
                <img src={financeIcon} alt="Финансы" />
                <h3>Финансы</h3>
              </div>
              <div className="card-finance-desc">
                <p>Последняя продажа <span>01.01.2024</span></p>
                <p>Баланс <span>10 000₽</span></p>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="card-finance">
                <img src={financeIcon} alt="Финансы" />
                <h3>Финансы</h3>
              </div>
              <div className="card-finance-desc">
                <p>Последняя продажа <span>01.01.2024</span></p>
              </div>
            </Card>
          )}
          {isOwner ? (
            <div className="card">
              <Link to='/ep/'>
                <div className="card-profile">
                  <img src={profileIcon} alt="Профиль" className="profile-pic" />
                  <div className="profile-info">
                    <h3>{username}</h3>
                    <Link className="card-profile-premium" to="/premium">Premium</Link>
                  </div>
                </div>
              </Link>
              <div className="card-profile-desc">
                <p>Email <span>{email}</span><button onClick={handleLogout}>Выйти</button></p>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-profile">
                <img src={profileIcon} alt="Профиль" className="profile-pic" />
                <div className="profile-info">
                  <h3>{username}</h3>
                  <Link className="card-profile-premium" to="/premium">Premium</Link>
                </div>
              </div>
            </div>
          )}
          {isOwner ? (
            <Card>
              <div className="card-rating">
                <img src={ratingIcon} alt="Рейтинг" />
                <h3>Рейтинг</h3>
              </div>
              <div className="card-rating-desc">
                <p>Ваш рейтинг <span>5.0</span></p>
                <p>Всего отзывов <span>50</span></p>
              </div>
            </Card>
          ): (
            <Card>
              <div className="card-rating">
                <img src={ratingIcon} alt="Рейтинг" />
                <h3>Рейтинг</h3>
              </div>
              <div className="card-rating-desc">
                <p>Рейтинг {username} <span>5.0</span></p>
                <p>Всего отзывов <span>50</span></p>
              </div>
            </Card>
          )}
          <div className="grid">
            <Card link="/purchases">
              <div className="card-purchase">
                <h3>Покупки</h3>
              </div>
              <div className="card-purchase-desc"><p>Количество <span>150</span></p></div>
            </Card>

            {/* Продажи */}
            <Card link="/sales">
              <div className="card-sales">
                <h3>Продажи</h3>
              </div>
              <div className="card-sales-desc"><p>Количество <span>150</span></p></div>
            </Card>

            {/* Выставленные */}
            <Card link="/listed">
              <div className="card-listed">
                <h3>Выставленные</h3>
              </div>
              <div className="card-listed-desc"><p>Смотреть <span>12</span></p></div>
            </Card>
            {isOwner ? (
              <Card link="/profile">
                <div className="card-paymants-methods">
                  <h3>Способ оплаты</h3>
                </div>
                <div className="card-paymants-methods-desc"><p>SberPay: 3577</p></div>
              </Card>
            ) : null}
          </div>
        </div>
      </>
    ) : (<div className="log-in-first">
      <p>Сначала авторизуйтесь</p>
    </div>)}
    </>
  );
};

export default Dashboard;
