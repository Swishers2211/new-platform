import React from "react";
import { Link } from "react-router-dom";

import "../Css/SalesPage.css";

import PurchaseStatus from "../Components/SaleStatus"

import productlogoIcon from "../Images/product-logo.jpg"

function SalesPage() {
    return (
        <>
        <p className="sale-page">Главная / Меню / Продажи</p>
        <div className="product-grid-sale">
            <div className="window-product-sale">
                <Link className="window-product-link-sale" to='/product'>
                    <div className="product-photo-sale">
                    <img src={productlogoIcon} alt="Лого продукта" />
                    </div>
                    <div className="product-price-sale">
                    <h3>1000₽</h3>
                    </div>
                    <div className="product-title-sale">
                    <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                    </div>
                    <div className="product-sale">
                    <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
                    <p className="status-sale"><PurchaseStatus status="Успешно" /> <p className="date-time-sale">01.01.2024, 00:00</p></p>
                    </div>
                </Link>
                <Link className="order-number-sale-link" to="#">
                    <div className="order-number-sale">
                    <h3>#1km223l</h3>
                    </div>
                </Link>
            </div>
            <div className="window-product-sale">
                <Link className="window-product-link-sale" to='/product'>
                    <div className="product-photo-sale">
                    <img src={productlogoIcon} alt="Лого продукта" />
                    </div>
                    <div className="product-price-sale">
                    <h3>1000₽</h3>
                    </div>
                    <div className="product-title-sale">
                    <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                    </div>
                    <div className="product-sale">
                    <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
                    <p className="status-sale"><PurchaseStatus status="Возврат" /> <p className="date-time-sale">01.01.2024, 00:00</p></p>
                    </div>
                </Link>
                <Link className="order-number-sale-link" to="#">
                    <div className="order-number-sale">
                    <h3>#1km223l</h3>
                    </div>
                </Link>
            </div>
            <div className="window-product-sale">
                <Link className="window-product-link-sale" to='/product'>
                    <div className="product-photo-sale">
                    <img src={productlogoIcon} alt="Лого продукта" />
                    </div>
                    <div className="product-price-sale">
                    <h3>1000₽</h3>
                    </div>
                    <div className="product-title-sale">
                    <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                    </div>
                    <div className="product-sale">
                    <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
                    <p className="status-sale"><PurchaseStatus status="Оплачен" /> <p className="date-time-sale">01.01.2024, 00:00</p></p>
                    </div>
                </Link>
                <Link className="order-number-sale-link" to="#">
                    <div className="order-number-sale">
                    <h3>#1km223l</h3>
                    </div>
                </Link>
            </div>
            <div className="window-product-sale">
                <Link className="window-product-link-sale" to='/product'>
                    <div className="product-photo-sale">
                    <img src={productlogoIcon} alt="Лого продукта" />
                    </div>
                    <div className="product-price-sale">
                    <h3>1000₽</h3>
                    </div>
                    <div className="product-title-sale">
                    <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                    </div>
                    <div className="product-sale">
                    <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
                    <p className="status-sale"><PurchaseStatus status="Возврат" /> <p className="date-time-sale">01.01.2024, 00:00</p></p>
                    </div>
                </Link>
                <Link className="order-number-sale-link" to="#">
                    <div className="order-number-sale">
                    <h3>#1km223l</h3>
                    </div>
                </Link>
            </div>
            <div className="window-product-sale">
                <Link className="window-product-link-sale" to='/product'>
                    <div className="product-photo-sale">
                    <img src={productlogoIcon} alt="Лого продукта" />
                    </div>
                    <div className="product-price-sale">
                    <h3>1000₽</h3>
                    </div>
                    <div className="product-title-sale">
                    <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                    </div>
                    <div className="product-sale">
                    <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
                    <p className="status-sale"><PurchaseStatus status="Оплачен" /> <p className="date-time-sale">01.01.2024, 00:00</p></p>
                    </div>
                </Link>
                <Link className="order-number-sale-link" to="#">
                    <div className="order-number-sale">
                    <h3>#1km223l</h3>
                    </div>
                </Link>
            </div>
            <div className="window-product-sale">
                <Link className="window-product-link-sale" to='/product'>
                    <div className="product-photo-sale">
                    <img src={productlogoIcon} alt="Лого продукта" />
                    </div>
                    <div className="product-price-sale">
                    <h3>1000₽</h3>
                    </div>
                    <div className="product-title-sale">
                    <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                    </div>
                    <div className="product-sale">
                    <p>Продавец: <Link to='/profile'><h4>Nickname</h4></Link></p>
                    <p className="status-sale"><PurchaseStatus status="Успешно" /> <p className="date-time-sale">01.01.2024, 00:00</p></p>
                    </div>
                </Link>
                <Link className="order-number-sale-link" to="#">
                    <div className="order-number-sale">
                    <h3>#1km223l</h3>
                    </div>
                </Link>
            </div>
      </div>
      <div className="show-more-sale">
          <p>Показать больше</p>
      </div>
    </>
    );
}

export default SalesPage;