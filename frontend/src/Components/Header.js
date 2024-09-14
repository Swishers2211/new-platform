import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Css/Header.css";

import logoIcon from '../Images/logo.png';
import catalogIcon from '../Images/catalog.png';
import chatIcon from '../Images/chat.png';
import notificationsIcon from '../Images/notifications.png';
import profileIcon from '../Images/profile.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для мобильного меню

    // Функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Обработчик изменения размера окна
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false); // Закрыть меню, если ширина экрана больше 768px
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMenuOpen]);

    return (
        <>
        <header className="header">
            <div className="left-group">
                <nav className="nav-left-group">
                    <ul className="left-btn">
                        <li className="li-btn-left logo">
                            <Link className="logo" to="/"><img src={logoIcon} alt="Логотип" /></Link>
                        </li>
                        <li className="li-btn-left desktop-catalog">
                            <Link className="catalog" to="/catalog"><img src={catalogIcon} alt="Каталог" />Каталог</Link>
                        </li>
                        <li className="li-btn-left">
                            <input type="text" placeholder="Поиск по сайту" className="search" />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right-group desktop">
                <nav className="nav-right-group">
                    <ul className="right-btn">
                        <li className="li-btn-right chat">
                            <Link className="chat" to="/chat"><img className="chat" src={chatIcon} alt="Чат" /></Link>
                        </li>
                        <li className="li-btn-right notifications">
                            <Link className="notifications" to="/notifications"><img className="notifications" src={notificationsIcon} alt="Уведомления" /></Link>
                        </li>
                        <li className="li-btn-right">
                            <Link className="profile" to="/profile"><img className="profile" src={profileIcon} alt="Профиль" /></Link>
                        </li>
                        <li className="li-btn-right">
                            <Link className="premium" to="/premium">Premium</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right-group mobile">
                <button className="catalog-button" onClick={toggleMenu}>
                    <img src={catalogIcon} alt="Каталог" />
                </button>
            </div>

            {isMenuOpen && (
                <div className="mobile-menu">
                    <ul>
                        <li><Link to="/">Username</Link></li>
                        <li><Link to="/catalog" className="catalog-mobile">Каталог</Link></li>
                        <li><Link to="/chat">Чат</Link></li>
                        <li><Link to="/notifications">Уведомления</Link></li>
                        <li className="premium-link">
                            <Link to="/premium">Premium</Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
        </>
    );
}

export default Header;
