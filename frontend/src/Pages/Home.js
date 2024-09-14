import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";

import leftarrowIcon from "../Images/left-arrow.png";
import rightarrowIcon from "../Images/right-arrow.png";
import productlogoIcon from "../Images/product-logo.jpg"

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    { image: require("../Images/banner2.jpg"), url: "/" },
    { image: require("../Images/banner1.jpg"), url: "/" },
    { image: require("../Images/banner3.jpg"), url: "/" }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <>
      <div className="banner-container">
        <button className="arrow-left" onClick={handlePrev}>
          <img src={leftarrowIcon} alt="Left Arrow" />
        </button>
        <div className="banner">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`banner-item ${index === activeIndex ? "active" : ""}`}
            >
              <Link to={banner.url}>
                <img src={banner.image} alt={`Баннер ${index + 1}`} />
              </Link>
            </div>
          ))}
        </div>
        <button className="arrow-right" onClick={handleNext}>
          <img src={rightarrowIcon} alt="Right Arrow" />
        </button>
      </div>
      <div className="product-grid">
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>Лучший аккаунт в снг 500млн автовыдача Social club + Steam GTA 5</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
        <div className="window-product">
          <Link className="window-product-link" to='/product'>
            <div className="product-photo">
              <img src={productlogoIcon} alt="Лого продукта" />
            </div>
            <div className="product-price">
              <h3>1000₽</h3>
            </div>
            <div className="product-title">
              <p>🔴Турецкий аккаунт PlaySt PS4 PS5 Турция🔴БЫСТРО 🔴Турецкий аккаунт PlaySt PS5 Турция🔴БЫСТРО</p>
            </div>
            <div className="product-review">
              <p>Оценок: 1000</p>
            </div>
          </Link>
          <Link className="purchase-button-link" to="#">
            <div className="purchase-button">
              <h3>Купить</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="show-more">
        <p>Показать больше</p>
      </div>
    </>
  );
}

export default Home;
