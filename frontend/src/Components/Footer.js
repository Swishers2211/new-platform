import React from "react";
import { Link } from "react-router-dom";

import tgIcon from "../Images/tg-icon.png";
import tiktokIcon from "../Images/tiktok-icon.png";
import youtubeIcon from "../Images/youtube-icon.png";
import vkIcon from "../Images/vk-icon.png";

import "../Css/Footer.css"

function Footer({ loading }) {
    if (loading) return null;

    return (
        <>
            <div className="footer-container">
                <div className="footer-window">
                    <p>©2024-2025 Nickname</p>
                    <div className="footer">
                        <ul className="footer-links">
                            <li className="privacy-policy-li"><Link to='#' className="privacy-policy-link">Политика конфиденциальности</Link></li>
                            <li className="coockie-policy-li"><Link to='#' className="coockie-policy-link">Политика Coockie</Link></li>
                            <li className="support-li">Поддержка: <a href='mailto:example@gmail.com' target="_blank" rel="noopener noreferrer" className="support-link">example@gmail.com</a></li>
                        </ul>
                        <ul className="footer-social-networks">
                            <li className="telegram-social-network-li"><a href='https://t.me/sw11shers' target="_blank" rel="noopener noreferrer" className="telegram-social-network-link"><img src={tgIcon} alt="Телеграм лого"></img></a></li>
                            <li className="vk-social-network-li"><a href='https://t.me/sw11shers' target="_blank" rel="noopener noreferrer" className="vk-social-network-link"><img src={vkIcon} alt="Вк лого"></img></a></li>
                            <li className="tiktok-social-network-li"><a href='https://t.me/sw11shers' target="_blank" rel="noopener noreferrer" className="tiktok-social-network-link"><img src={tiktokIcon} alt="Тик Ток лого"></img></a></li>
                            <li className="youtube-social-network-li"><a href='https://t.me/sw11shers' target="_blank" rel="noopener noreferrer" className="youtube-social-network-link"><img src={youtubeIcon} alt="Ютуб лого"></img></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;