import React from "react";
import { Link } from "react-router-dom";

import OrderStatus from "../Components/FinanceStatus";
import "../Css/FinancePage.css"

function FinancePage() {
    return (
        <>
            <div className="finance-container" >
                <p className="finance-page">Главная / Меню / Финансы</p>
                <div className="finance-info">
                    <h2 className="balance">Баланс 10000₽</h2>
                    <Link><h3 className="withdraw-money">Вывести деньги</h3></Link>
                </div>
                <div className="finance-window">
                    <div className="operation-headers">
                        <ul className="operations-title">
                            <li className="date-time-header">Дата/Время</li>
                            <li className="order-header">Заказ</li>
                            <li className="status-header">Статус</li>
                            <li className="sum-header">Сумма</li>
                        </ul>
                    </div>
                    <div className="checks">
                        <ul className="checks-info">
                            <li className="date-time-check">01.01.2024, 00:00</li>
                            <li className="order-number-check"><Link className="order-number-link" to='/product'>#1km223l</Link></li>
                            <li className="order-status-check">
                                <OrderStatus status="Успешно" />
                            </li>
                            <li className="order-sum-check">+10000₽</li>
                        </ul>
                    </div>
                    <div className="checks">
                        <ul className="checks-info">
                            <li className="date-time-check">01.01.2024, 00:00</li>
                            <li className="order-number-check"><Link className="order-number-link" to='/product'>#1km223l</Link></li>
                            <li className="order-status-check">
                                <OrderStatus status="Отклонено" />
                            </li>
                            <li className="order-sum-check">+2000₽</li>
                        </ul>
                    </div>
                    <div className="checks">
                        <ul className="checks-info">
                            <li className="date-time-check">01.01.2024, 00:00</li>
                            <li className="order-number-check"><Link className="order-number-link" to='/product'>#1km223l</Link></li>
                            <li className="order-status-check">
                                <OrderStatus status="В процессе..." />
                            </li>
                            <li className="order-sum-check">-76000₽</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FinancePage;
