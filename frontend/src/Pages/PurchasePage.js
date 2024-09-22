import React from "react";
import { Link } from "react-router-dom";
import "../Css/PurchasePage.css";

import PurchaseStatus from "../Components/PurchaseStatus"

import productlogoIcon from "../Images/product-logo.jpg"

function PurchasePage() {
  return (
    <>
      <p className="purchases-page">Главная / Меню / Покупки</p>
      <div className="product-grid-purchase">
        <div className="window-product-purchase">
          <Link className="window-product-link-purchase" to='/product'>
            <div className="product-photo-purchase">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price-purchase">
              <h3>1000₽</h3>
            </div>
            <div className="product-title-purchase">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-purchase">
              <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
              <p className="status-purchase"><PurchaseStatus status="Успешно" /> <p className="date-time-purchase">01.01.2024, 00:00</p></p>
            </div>
          </Link>
          <Link className="order-number-purchase-link" to="#">
            <div className="order-number-purchase">
              <h3>#1km223l</h3>
            </div>
          </Link>
        </div>
        <div className="window-product-purchase">
          <Link className="window-product-link-purchase" to='/product'>
            <div className="product-photo-purchase">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price-purchase">
              <h3>1000₽</h3>
            </div>
            <div className="product-title-purchase">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-purchase">
              <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
              <p className="status-purchase"><PurchaseStatus status="Оплачен" /> <p className="date-time-purchase">01.01.2024</p></p>
            </div>
          </Link>
          <Link className="order-number-purchase-link" to="#">
            <div className="order-number-purchase">
              <h3>#1km223l</h3>
            </div>
          </Link>
        </div>
        <div className="window-product-purchase">
          <Link className="window-product-link-purchase" to='/product'>
            <div className="product-photo-purchase">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price-purchase">
              <h3>1000₽</h3>
            </div>
            <div className="product-title-purchase">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-purchase">
              <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
              <p className="status-purchase"><PurchaseStatus status="Оплачен" /> <p className="date-time-purchase">01.01.2024</p></p>
            </div>
          </Link>
          <Link className="order-number-purchase-link" to="#">
            <div className="order-number-purchase">
              <h3>#1km223l</h3>
            </div>
          </Link>
        </div>
        <div className="window-product-purchase">
          <Link className="window-product-link-purchase" to='/product'>
            <div className="product-photo-purchase">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price-purchase">
              <h3>1000₽</h3>
            </div>
            <div className="product-title-purchase">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-purchase">
              <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
              <p className="status-purchase"><PurchaseStatus status="Оплачен" /> <p className="date-time-purchase">01.01.2024</p></p>
            </div>
          </Link>
          <Link className="order-number-purchase-link" to="#">
            <div className="order-number-purchase">
              <h3>#1km223l</h3>
            </div>
          </Link>
        </div>
        <div className="window-product-purchase">
          <Link className="window-product-link-purchase" to='/product'>
            <div className="product-photo-purchase">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price-purchase">
              <h3>1000₽</h3>
            </div>
            <div className="product-title-purchase">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-purchase">
              <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
              <p className="status-purchase"><PurchaseStatus status="Оплачен" /> <p className="date-time-purchase">01.01.2024</p></p>
            </div>
          </Link>
          <Link className="order-number-purchase-link" to="#">
            <div className="order-number-purchase">
              <h3>#1km223l</h3>
            </div>
          </Link>
        </div>
        <div className="window-product-purchase">
          <Link className="window-product-link-purchase" to='/product'>
            <div className="product-photo-purchase">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price-purchase">
              <h3>1000₽</h3>
            </div>
            <div className="product-title-purchase">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-purchase">
              <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
              <p className="status-purchase"><PurchaseStatus status="Оплачен" /> <p className="date-time-purchase">01.01.2024</p></p>
            </div>
          </Link>
          <Link className="order-number-purchase-link" to="#">
            <div className="order-number-purchase">
              <h3>#1km223l</h3>
            </div>
          </Link>
        </div>
        <div className="window-product-purchase">
          <Link className="window-product-link-purchase" to='/product'>
            <div className="product-photo-purchase">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price-purchase">
              <h3>1000₽</h3>
            </div>
            <div className="product-title-purchase">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-purchase">
              <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
              <p className="status-purchase"><PurchaseStatus status="Оплачен" /> <p className="date-time-purchase">01.01.2024</p></p>
            </div>
          </Link>
          <Link className="order-number-purchase-link" to="#">
            <div className="order-number-purchase">
              <h3>#1km223l</h3>
            </div>
          </Link>
        </div>
        <div className="window-product-purchase">
          <Link className="window-product-link-purchase" to='/product'>
            <div className="product-photo-purchase">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price-purchase">
              <h3>1000₽</h3>
            </div>
            <div className="product-title-purchase">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-purchase">
              <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
              <p className="status-purchase"><PurchaseStatus status="Возврат" /> <p className="date-time-purchase">01.01.2024</p></p>
            </div>
          </Link>
          <Link className="order-number-purchase-link" to="#">
            <div className="order-number-purchase">
              <h3>#1km223l</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="show-more-purchase">
          <p>Показать больше</p>
      </div>
    </>
  );
}

export default PurchasePage;
