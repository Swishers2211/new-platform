import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Css/Detail-product.css";

import detailproductIcon from "../Images/product-logo.jpg";
import userprofileIcon from "../Images/profile-user.png";
import reviewstarIcon from "../Images/review-star.png";
import threedotsIcon from "../Images/three-dots.png";
import sendmessageIcon from "../Images/send-message.png";

function DetailProduct() {
    const [showBlockButton, setShowBlockButton] = useState(false);
    const messagesEndRef = useRef(null);

    const handleMenuClick = () => {
        setShowBlockButton(prevState => !prevState);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, []);

    return (
        <>
            <div className="main-container">
                <p className="page-name">Главная / Каталог</p>

                <div className="product-container">
                    <div className="product-info">
                        <div className="info-product">
                            <img className="detail-product-logo" src={detailproductIcon} alt="Лого" />
                            <h2 className="detail-product-name">
                                Купить Ключ Grand Theft Auto V: Premium•Steam Выбор Регион💳0% GIFT
                            </h2>
                        </div>
                        <div className="buy-window">
                            <h3 className="detail-product-price">1000 ₽</h3>
                            <Link className="buy-link" to="#">
                                <h3 className="detail-product-buy">Купить</h3>
                            </Link>
                        </div>
                        <h3 className="product-description">Описание товара</h3>
                        <div className="product-description-window">
                            <p>🚀 АВТОМАТИЧЕСКАЯ ДОСТАВКА 24/7 🚀
После оплаты начнется процесс активации товара на ваш аккаунт.
В среднем это занимает не более 2 минут.
В очень редких случаях доставка может быть задержана.❗0% комиссии при оплате картой и QIWI с помощью LAVA!⚠️ВНИМАНИЕ!
Данный товар не содержит ключей или пин-кодов. Игра отправляется в качестве гифта (подарка).✅Товар может быть активирован только в этих странах: Россия.
Проверить ваш регион аккаунта можно здесь - https://store.steampowered.com/account⚠️ НЕ ЗАБУДЬТЕ УКАЗАТЬ ПРАВИЛЬНУЮ ССЫЛКУ НА ПРОФИЛЬ.
Сохранить в инвентарь или передать игру нельзя. Если хотите купить игру в подарок - укажите ссылку на профиль получателя. Помните, что для доставки игры нужно принять приглашение бота.

Все товары куплены официально через платформу Steam. На все купленные товары распространяется пожизненная гарантия. Если у вас возникли какие-то трудности с активацией или получением купленного товара незамедлительно обращайтесь на любой из контактов указанных в профиле, либо через чат на сайте продажи.</p>
                        </div>
                        <h3 className="product-reviews">Отзывы</h3>
                        <div className="review-window">
                            <div className="review-container">
                                <div className="review">
                                    <img className="user-img" src={userprofileIcon} alt="Фото пользователя" />
                                    <div className="review-content">
                                        <div className="review-header">
                                            <h3 className="username-reviews">Nickname</h3>
                                            <p className="datetime-reviews">13.09.2024 / 00:00</p>
                                            <p className="nickname-service">GTA 5</p>
                                            <ul className="reviews-stars">
                                                5<li><img className="star-1" src={reviewstarIcon} alt="Star" /></li>
                                                <li><img className="stars-2" src={reviewstarIcon} alt="Star" /></li>
                                                <li><img className="stars-3" src={reviewstarIcon} alt="Star" /></li>
                                                <li><img className="stars-4" src={reviewstarIcon} alt="Star" /></li>
                                                <li><img className="stars-5" src={reviewstarIcon} alt="Star" /></li>
                                            </ul>
                                        </div>
                                        <p className="review-text"> 💟⚡️PLUS⚡️БЕЛАТНЫЙ СПОСОБ GPT-4⚡️АВТОВЫДАЧА⚡️НЕ ТГ | ЛИЧНЫЙ GPT-4⚡️💟</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="#" className="show-more-review">Показать еще отзывы 1000</Link>
                    </div>
                    <div className="detail-product-chat-container">
                        <div className="detail-product-chat-header">
                            <div className="user-info">
                                <img src={userprofileIcon} alt="Фото продавца" />
                                <div>
                                    <div className="nickname">User Nickname</div>
                                    <div className="status online">Онлайн</div>
                                </div>
                            </div>
                            <div className="menu" onClick={handleMenuClick}>
                                <img src={threedotsIcon} alt="Меню" className="menu-icon" />
                                {showBlockButton && (
                                    <button className="block-button">Заблокировать</button>
                                )}
                            </div>
                        </div>

                        <div className="detail-product-chat-messages">
                            <div className="user-msg">
                                <div className="detail-product-message user">
                                    <div className="content">Привет, как дела?</div>
                                    <div className="time">12:31</div>
                                </div>
                            </div>
                            <div className="other-msg">
                                <div className="detail-product-message other">
                                    <div className="content">Всё хорошо, спасибо! Как ты?</div>
                                    <div className="time">12:31</div>
                                </div>
                            </div>
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="detail-product-chat-footer">
                            <input type="text" placeholder="Написать..." />
                            <img src={sendmessageIcon} alt="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProduct;
