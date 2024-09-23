import React from "react";
import { Link } from "react-router-dom";

import productlogoIcon from "../Images/product-logo.jpg"

import "../Css/ListedProductPage.css"

function ListedProductPage() {
    return (
        <>
            <div className="display-the-goods">
                <p className="listed-page">Главная / Меню / Выставленные</p>
                <Link to="/add_offer" className="display-the-goods-link">Добавить предложение</Link>
            </div>
            <div className="product-grid-listed">
                <div className="window-product-listed">
                    <Link className="window-product-link-listed" to='/product'>
                        <div className="product-photo-listed">
                        <img src={productlogoIcon} alt="Лого продукта" />
                        </div>
                        <div className="product-price-listed">
                        <h3>1000₽</h3>
                        </div>
                        <div className="product-title-listed">
                        <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                        </div>
                    </Link>
                    <Link className="order-number-listed-link" to="#">
                        <div className="order-number-listed">
                        <h3>Посмотреть</h3>
                        </div>
                    </Link>
                </div>
                <div className="window-product-listed">
                    <Link className="window-product-link-listed" to='/product'>
                        <div className="product-photo-listed">
                        <img src={productlogoIcon} alt="Лого продукта" />
                        </div>
                        <div className="product-price-listed">
                        <h3>1000₽</h3>
                        </div>
                        <div className="product-title-listed">
                        <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                        </div>
                    </Link>
                    <Link className="order-number-listed-link" to="#">
                        <div className="order-number-listed">
                        <h3>Посмотреть</h3>
                        </div>
                    </Link>
                </div>
                <div className="window-product-listed">
                    <Link className="window-product-link-listed" to='/product'>
                        <div className="product-photo-listed">
                        <img src={productlogoIcon} alt="Лого продукта" />
                        </div>
                        <div className="product-price-listed">
                        <h3>1000₽</h3>
                        </div>
                        <div className="product-title-listed">
                        <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                        </div>
                    </Link>
                    <Link className="order-number-listed-link" to="#">
                        <div className="order-number-listed">
                        <h3>Посмотреть</h3>
                        </div>
                    </Link>
                </div>
                <div className="window-product-listed">
                    <Link className="window-product-link-listed" to='/product'>
                        <div className="product-photo-listed">
                        <img src={productlogoIcon} alt="Лого продукта" />
                        </div>
                        <div className="product-price-listed">
                        <h3>1000₽</h3>
                        </div>
                        <div className="product-title-listed">
                        <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                        </div>
                    </Link>
                    <Link className="order-number-listed-link" to="#">
                        <div className="order-number-listed">
                        <h3>Посмотреть</h3>
                        </div>
                    </Link>
                </div>
                <div className="window-product-listed">
                    <Link className="window-product-link-listed" to='/product'>
                        <div className="product-photo-listed">
                        <img src={productlogoIcon} alt="Лого продукта" />
                        </div>
                        <div className="product-price-listed">
                        <h3>1000₽</h3>
                        </div>
                        <div className="product-title-listed">
                        <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                        </div>
                    </Link>
                    <Link className="order-number-listed-link" to="#">
                        <div className="order-number-listed">
                        <h3>Посмотреть</h3>
                        </div>
                    </Link>
                </div>
                <div className="window-product-listed">
                    <Link className="window-product-link-listed" to='/product'>
                        <div className="product-photo-listed">
                        <img src={productlogoIcon} alt="Лого продукта" />
                        </div>
                        <div className="product-price-listed">
                        <h3>1000₽</h3>
                        </div>
                        <div className="product-title-listed">
                        <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                        </div>
                    </Link>
                    <Link className="order-number-listed-link" to="#">
                        <div className="order-number-listed">
                        <h3>Посмотреть</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="show-more-listed">
                <p>Показать больше</p>
            </div>
        </>
    );
}

export default ListedProductPage;