import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import { useParams } from "react-router-dom";

import financeIcon from "../Images/finance.png"
import ratingIcon from "../Images/rating.png"
import profileIcon from "../Images/profile-user.png"

import "../Css/Dashboard.css"
import axios from "axios";

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
    const { userId } = useParams();  // Достаем ID пользователя из URL
    const [nickname, setNickname] = useState('');

    useEffect(() => {
      if (userId) {
          const fetchUserProfile = async () => {
              try {
                  const response = await axios.get(`http://localhost:8000/user/api/${userId}/`);
                  console.log(response.data);
                  setNickname(response.data.nickname);
              } catch (error) {
                  console.error('Ошибка получения профиля:', error);
              }
          };
  
          fetchUserProfile();
      }
  }, [userId]);

  const handleLogout = async () => {
    const csrfToken = getCookie('csrftoken'); // Функция для получения токена CSRF из cookies
    try {
        await axios.post(
            'http://localhost:8000/user/api/logout/',
            {},
            {
                withCredentials: true, // Убедитесь, что cookies отправляются
                headers: {
                    'X-CSRFToken': csrfToken // Включите токен CSRF в заголовки
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
      <p className="page-name-dashboard">Главная / Меню</p>
      <div className="dashboard">
        {/* Первая карточка - Финансы */}
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
        <div className="card" link="/profile">
          <Link to='/ep/'>
            <div className="card-profile">
              <img src={profileIcon} alt="Профиль" className="profile-pic" />
              <div className="profile-info">
                <h3>{nickname}</h3>
                <Link className="card-profile-premium" to="/premium">Premium</Link>
              </div>
            </div>
          </Link>
          <div className="card-profile-desc">
            <p>Email <span>sdvwd@</span><button onClick={handleLogout}>Выйти</button></p>
          </div>
        </div>
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

          {/* Способ оплаты */}
          <Card link="/profile">
            <div className="card-paymants-methods">
              <h3>Способ оплаты</h3>
            </div>
            <div className="card-paymants-methods-desc"><p>SberPay: 3577</p></div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
