import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import productlogoIcon from "../Images/product-logo.jpg";
import "../Css/Catalog.css";

import closefiltrIcon from "../Images/close-filtrs.png"

function Catalog() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active" : "";
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1347);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    // Detect screen size changes
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1347);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleFilters = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    return (
        <div className="catalog-content">
            <p className="pages-name">Главная / Каталог</p>
            <h2 className="nickname-category">Все товары</h2>
            <p className="description-category">
                Хочешь расслабиться сам или с друзьями? Тогда покупай ключ или аккаунт от какой нибудь игры и начинай чилить.
            </p>

            <div className="categories">
                <ul className="category-list">
                    <li className={`category-link ${isActive("/")}`}>
                        <Link to="/">Все товары</Link>
                    </li>
                    <li className={`category-link ${isActive("/games")}`}>
                        <Link to="/games">Игры</Link>
                    </li>
                    <li className={`category-link ${isActive("/currency")}`}>
                        <Link to="/currency">Внутриигровая валюта</Link>
                    </li>
                    <li className={`category-link ${isActive("/services")}`}>
                        <Link to="/services">Соцсети и сервисы</Link>
                    </li>
                </ul>
            </div>
            {isMobile && (
                <button className="toggle-filters-button" onClick={toggleFilters}>
                    Фильтры
                </button>
            )}
            <div className="catalog-main">
                {(!isMobile || isFiltersOpen) && (
                    <div className="filters-container">
                        <div className="filters-window">
                            {isMobile && (
                                <button className="close-filters" onClick={toggleFilters}>
                                    <img src={closefiltrIcon} alt="Заркыть меню"></img>
                                </button>
                            )}
                            <div className="name-category">
                                <h3>Игры</h3>
                            </div>
                            <div className="search-services">
                                <input type="text" placeholder="Поиск" className="search-service" />
                            </div>
                            <div className="list-categories">
                                <ul className="list-categories-ul">
                                    {["GTA 5", "RDR 2", "Minecraft", "CS 2", "Dota 2", "Standoff 2", "Genshin Impact"].map(service => (
                                        <li key={service} className="service-link">
                                            <Link to="#">{service}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="name-platform">
                                <h3>Платформы</h3>
                            </div>
                            <div className="platforms">
                                <ul className="platform-list">
                                    {["GTA 5", "RDR 2", "Minecraft", "CS 2", "Dota 2"].map(platform => (
                                        <li key={platform} className="platform-item">
                                            <label className="custom-checkbox">
                                                <input type="checkbox" className="checkbox-input" />
                                                <span className="checkbox-mark"></span>
                                            </label>
                                            {platform}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="price-filter">
                                <h3>Цена, ₽</h3>
                                <div className="price-range">
                                    <label htmlFor="min-price" className="price-label">
                                        От:
                                        <input type="number" id="min-price" className="price-input" placeholder="0" />
                                    </label>
                                    <label htmlFor="max-price" className="price-label">
                                        До:
                                        <input type="number" id="max-price" className="price-input" placeholder="10000" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Products Grid */}
                <div className="product-grid-catalog">
                    {Array(30).fill().map((_, index) => (
                        <div key={index} className="window-product-catalog">
                            <Link className="window-product-link-catalog" to='/product'>
                                <div className="product-photo-catalog">
                                    <img src={productlogoIcon} alt="Лого продукта" />
                                </div>
                                <div className="product-price-catalog">
                                    <h3>1000₽</h3>
                                </div>
                                <div className="product-title-catalog">
                                    <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
                                </div>
                                <div className="product-review-catalog">
                                    <p>Оценок: 1000</p>
                                </div>
                            </Link>
                            <Link className="purchase-button-link-catalog" to="#">
                                <div className="purchase-button-catalog">
                                    <h3>Купить</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="show-more-container">
                <button className="show-more-button">Показать больше</button>
            </div>
        </div>
    );
}

export default Catalog;
