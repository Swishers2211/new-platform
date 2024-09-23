import React from "react";
import { Link } from "react-router-dom";

import arrowpremiumIcon from "../Images/arrow-premium.png";
import premiumuserIcon from "../Images/premium-user-logo.png";

import "../Css/PremiumPage.css";

function PremiumPage() {
    return (
        <>
            <div className="premium-container">
                <div className="premium-window">
                    <div className="premium-title">
                        <h3 className="nickname-app">Nickname</h3>
                        <p className="premium-text">Premium</p>
                    </div>
                    <div className="premium-description">
                        <p className="premium-desc-text">Premium</p>
                        <p className="premium-desc">подписка включает в себя</p>
                    </div>
                    <div className="premium-content">
                        <ul className="premium-funcs">
                            <li>
                                <img src={arrowpremiumIcon} alt='Галочка'></img>
                                <p>Снижение комиссии за продажи с 3% до 2%</p>
                            </li>
                            <li>
                                <img src={arrowpremiumIcon} alt='Галочка'></img>
                                <p>Снижение стоимости банерной рекламы с 150₽ до 100₽</p>
                            </li>
                            <li>
                                <img src={arrowpremiumIcon} alt='Галочка'></img>
                                <p>Доступ к более детальному обзору отзывов продавца</p>
                            </li>
                            <li>
                                <img src={arrowpremiumIcon} alt='Галочка'></img>
                                <p>Отправка медиа файлов в чате</p>
                            </li>
                            <li>
                                <img src={arrowpremiumIcon} alt='Галочка'></img>
                                <p>Продвижение товаров - товары появляются выше других</p>
                            </li>
                            <li>
                                <img src={arrowpremiumIcon} alt='Галочка'></img>
                                <p>Снижение комиссии за вывод средств с 3% до 2%</p>
                            </li>
                            <li>
                                <img src={arrowpremiumIcon} alt='Галочка'></img>
                                <p>Значок премиум пользователь</p>
                                <img className="logo-prem" src={premiumuserIcon} alt='Премиум значок'></img>
                            </li>
                        </ul>
                    </div>
                    <div className="buy-prem">
                        <Link className="buy-premium" to='#'>Купить за 400₽ в месяц</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PremiumPage;