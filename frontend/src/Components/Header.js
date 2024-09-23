import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Css/Header.css";

import logoIcon from '../Images/logo.png';
import catalogIcon from '../Images/catalog.png';
import profileIcon from '../Images/profile.png';
import arrowIcon from '../Images/arrow-down.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
                setIsProfileMenuOpen(false); // Закрыть меню профиля при изменении размера
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                            <li className="li-btn-right chat" onClick={toggleProfileMenu}>
                                <Link className="chat" to="/chats">Сообщения</Link>
                            </li>
                            <li className="li-btn-right profile-wrapper">
                                <div className="profile-arrow-container" onClick={toggleProfileMenu}>
                                    <img className="profile" src={profileIcon} alt="Профиль" />
                                    <img className="profile-arrow" src={arrowIcon} alt="Стрелка вниз" />
                                </div>
                                {isProfileMenuOpen && (
                                    <div className={`dropdown-dashboard ${isProfileMenuOpen ? 'active' : ''}`}>
                                        <ul>
                                            <li onClick={(e) => e.stopPropagation()}><Link className="dashboard" to="/dashboard"><h3>Nickname</h3></Link></li>
                                            <li onClick={(e) => e.stopPropagation()}><Link className="rules" to="/rules">Правила</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="li-btn-right">
                                <Link className="premium" to="/premium">Premium</Link>
                            </li>
                            {/* <li className="li-btn-right">
                                <Link className="auth" to="/auth">Войти</Link>
                            </li>
                            <li className="li-btn-right">
                                <Link className="create-account" to="/create_account">Создать аккаунт</Link>
                            </li> */}
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
                            <li><Link to="/dashboard">Username</Link></li>
                            <li><Link to="/catalog" className="catalog-mobile">Каталог</Link></li>
                            <li><Link to="/chats">Сообщения</Link></li>
                            <li><Link to="/create_account">Создать аккаунт</Link></li>
                            <li><Link to="/auth">Войти</Link></li>
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
