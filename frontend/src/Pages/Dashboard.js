import React from "react";
import { Link } from "react-router-dom";

import financeIcon from "../Images/finance.png"
import ratingIcon from "../Images/rating.png"
import profileIcon from "../Images/profile-user.png"

import "../Css/Dashboard.css"

// Компонент для карточек
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

// Главный компонент
const Dashboard = () => {
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
        <Card link="/profile">
          <div className="card-profile">
            <img src={profileIcon} alt="Профиль" className="profile-pic" />
            <div className="profile-info">
              <h3>Sw11shers</h3>
              <Link className="card-profile-premium" to="/premium">Premium</Link>
            </div>
          </div>
          <div className="card-profile-desc">
            <p>Email <span>example@gmail.com</span> <button>Выйти</button></p>
          </div>
        </Card>
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
