import React, { useState } from "react";
import { Link } from "react-router-dom";

import threedotsIcon from "../Images/three-dots.png";
import sendmessageIcon from "../Images/send-message.png";
import profileimageIcon from "../Images/profile-user.png";
import backArrowIcon from "../Images/back-arrow.png"; // Иконка "назад"

import "../Css/Chat.css";

function Chat() {
    const [showBlockButton, setShowBlockButton] = useState(false);
    const [activeChat, setActiveChat] = useState(null); // Для отслеживания активного чата

    const handleMenuClick = () => {
        setShowBlockButton(prevState => !prevState);
    };

    const handleChatClick = (chatId) => {
        setActiveChat(chatId); // При выборе чата сохраняем его ID
    };

    const handleBackClick = () => {
        setActiveChat(null); // Вернуться к списку чатов
    };

    return (
        <>
        <div className="chat-container">
            <div className={`chats-window ${activeChat ? "hidden" : ""}`}>
                <div className="chats-header">
                    <input type="text" placeholder="Поиск" />
                </div>
                <div className="chats-list">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((chatId) => (
                        <div
                            key={chatId}
                            className={`chat-item ${activeChat === chatId ? "active" : ""}`}
                            onClick={() => handleChatClick(chatId)}
                        >
                            <img src={profileimageIcon} alt="User Avatar" className="chat-avatar" />
                            <div className="chat-info">
                                <h4>Username</h4>
                                <p>Последнее сообщение...</p>
                            </div>
                            <span className="chat-time">12:00</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`chat-window ${activeChat ? "" : "hidden"}`}>
                {activeChat ? (
                    <>
                        <div className="chat-header">
                            <img
                                src={backArrowIcon}
                                alt="Назад"
                                className="back-arrow-icon"
                                onClick={handleBackClick}
                            />
                            <Link className="header-nickname-link">
                                <h3>Nickname</h3>
                            </Link>
                            <p className="was-online">Был(a) в сети 00:00</p>
                            <div className="three-dots-menu" onClick={handleMenuClick}>
                                <img src={threedotsIcon} alt="Меню" className="menu-icon" />
                                {showBlockButton && (
                                    <button className="block-button-menu">Заблокировать</button>
                                )}
                            </div>
                        </div>
                        <div className="chat-messages">
                            <div className="user-message">
                                <div className="message user">
                                    <div className="content-message">Привет, как дела?</div>
                                    <div className="time-message">12:31</div>
                                </div>
                            </div>
                            <div className="other-message">
                                <div className="message other">
                                    <div className="content-message">Всё хорошо, спасибо! Как ты?</div>
                                    <div className="time-message">12:32</div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-footer">
                            <input type="text" placeholder="Написать..." />
                            <img src={sendmessageIcon} alt="Send" />
                        </div>
                    </>
                ) : (
                    <div className="select-chat-placeholder">
                        Выберите чат
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Chat;
