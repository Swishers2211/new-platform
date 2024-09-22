import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import uploadfileIcon from "../Images/upload-file.png";
import secureIcon from "../Images/secure.png";
import changeinfoIcon from "../Images/change-info.png";
import userprofileIcon from "../Images/profile-user.png";
import addcardIcon from "../Images/add-card.png"

import "../Css/Profile.css";

function Profile() {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);

  const handleSaveCard = () => {
    // Логика для сохранения данных карты (можно добавить здесь API вызов)
    console.log("Карта сохранена");
  
    // Закрытие окна добавления карты
    setShowAddCardModal(false);
  };

  return (
    <>
    <p className="page-name-profile">Главная / Меню / Профиль</p>
    <div className="user-card">
        <div className='card-container'>
            <div className="card-profile-container">
                <img src={userprofileIcon} alt="Профиль" className="user-profile-pic" />
                <div className="user-profile-info">
                    <h3>Sw11shers <img
                        src={changeinfoIcon}
                        alt="edit-icon"
                        onClick={() => setShowInfoModal(!showInfoModal)}
                        className="edit-icon"
                        style={{ marginLeft: '10px', cursor: 'pointer' }}
                        /></h3>
                    <Link className="user-card-profile-premium" to="/premium">Premium</Link>
                </div>
                </div>
                <div className="user-card-profile-desc">
                <p>Email <span>example@gmail.com</span></p>
            </div>
        </div>

        {showInfoModal && (
        <>
            <div className="modal-overlay" onClick={() => setShowInfoModal(false)}></div>
            <div className="edit-info-section">
                <h3>Изменение информации</h3>
                <div className="nickname-edit">
                    <p>Username</p>
                    <input type="text" className="nickname-input" />
                </div>
                <div className="photo-section">
                    <p>Фото</p>
                    <input type="file" id="upload-photo" style={{ display: 'none' }} />
                    <label htmlFor="upload-photo" className="custom-upload-button">
                        Загрузить фото<img src={uploadfileIcon} alt="premium-icon" className="premium-icon" />
                    </label>
                </div>
                <div className='save-info'>
                    <button className="save-button" onClick={() => {
                        // Здесь можно добавить логику для сохранения данных
                        setShowInfoModal(false); // Закрываем окно
                        }}>Сохранить
                    </button>
                    </div>
            </div>
        </>
        )}

    </div>
    <div className="payment-card">
        <h3>Способ оплаты</h3>

        <div className="primary-card">
            <p>Основная карта</p>
            <p>SberPay: 3577</p>
            <img src="/card-icon.png" alt="card-icon" className="card-icon" />
        </div>
        <div className="add-card" onClick={() => setShowAddCardModal(!showAddCardModal)}>
            <img src={addcardIcon} alt="add-card-icon" className="add-card-icon" />
            <p>Добавить карту</p>
        </div>

        {showAddCardModal && (
        <>
            <div class="overlay"></div>
            <div className="add-card-modal">
                <h3>Добавление карты</h3>
                    <input type="text" placeholder="Номер карты" className="card-number-input" />
                <div className="date-cvv-section">
                    <input type="text" placeholder="ММ/ГГ" className="date-input" />
                    <input type="text" placeholder="CVV/CVC" className="cvv-input" />
                </div>
                <div className="secure-info">
                    <img src={secureIcon} alt="secure-icon" />
                    <p>Данные карты надежно защищены</p>
                </div>
                <button className="save-card-button" onClick={handleSaveCard}>Сохранить</button>
            </div>
        </>
        )}
    </div>
  </>
  );
}

export default Profile;
