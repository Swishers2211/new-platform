import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../Css/Registration.css';

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/user/api/create_account/', {
                username: username,
                email: email,
                password: password
            });

            window.location.href = '/user/auth';

        } catch (error) {
            console.log('Ошибка регистрации', error.response.data);
        }
    };

    return (
        <>
            <div className='register-container'>
                <div className='register-window'>
                    <h3 className='create-account-title'>Создание аккаунта</h3>
                    <div className='register-fields'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username-register"></label>
                            <input 
                                type="text" 
                                id="username-register" 
                                name="username" 
                                placeholder="username" 
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <label htmlFor="email-register"></label>
                            <input 
                                type="text" 
                                id="email-register" 
                                name="email" 
                                placeholder="Email" 
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
            
                            <label htmlFor="password-register"></label>
                            <input 
                                type="password" 
                                id="password-register" 
                                name="password" 
                                placeholder="Пароль" 
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
            
                            <button type="submit">Создать аккаунт</button>
                        </form>
                    </div>
                    <div className='register-or-auth'>
                        <div className='line-container'>
                            <div className='line black-line'></div>
                            <div className='line gray-line'></div>
                        </div>
                        <Link to='/user/auth' className='auth-link'><h3 className='auth-title'>Войти</h3></Link>
                        <Link to='/user/create_account' className='register-link'><h3 className='register-title'>Создать аккаунт</h3></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;
