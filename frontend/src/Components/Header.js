import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Css/Header.css";

import LoadingInd from '../Components/Loading'

import logoIcon from '../Images/logo.png';
import catalogIcon from '../Images/catalog.png';
import profileIcon from '../Images/profile.png';
import arrowIcon from '../Images/arrow-down.png';

import apiClient from "../axiosConfig";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        apiClient.get('/user/api/check_auth/', { withCredentials: true })
            .then((response) => {
                if (response.data.isAuthenticated) {
                    setIsAuthenticated(true);
                    setUserId(response.data.user_id)
                } else {
                    setIsAuthenticated(false);
                }
            })
            .catch((error) => {
                console.log('Ошибка проверки авторизации', error);
                setIsAuthenticated(false);
            }).finally (() => {
                setLoading(false);
            });

    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

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
                            {loading ? (<LoadingInd />) : isAuthenticated ? (
                                <>
                                    <li className="li-btn-right chat">
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
                                                    <li onClick={(e) => e.stopPropagation()}><Link className="dashboard" to={`/user/${userId}/`}><h3>Nickname</h3></Link></li>
                                                    <li onClick={(e) => e.stopPropagation()}><Link className="rules" to="/rules">Правила</Link></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li className="li-btn-right">
                                        <Link className="premium" to="/premium">Premium</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="li-btn-right">
                                        <Link className="auth" to="/user/auth">Войти</Link>
                                    </li>
                                    <li className="li-btn-right">
                                        <Link className="create-account" to="/user/create_account">Создать аккаунт</Link>
                                    </li>
                                </>
                            )}
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
                            {isAuthenticated ? (
                                <>
                                    <li><Link to={`/user/${userId}/`}>Username</Link></li>
                                    <li><Link to="/catalog" className="catalog-mobile">Каталог</Link></li>
                                    <li><Link to="/chats">Сообщения</Link></li>
                                    <li className="premium-link">
                                        <Link to="/premium">Premium</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/user/create_account">Создать аккаунт</Link></li>
                                    <li><Link to="/user/auth">Войти</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;
