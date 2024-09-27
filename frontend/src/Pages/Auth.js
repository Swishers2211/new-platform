import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../Css/Auth.css'

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/user/api/auth/', 
                {
                    email: email,
                    password: password,
                
                },
                {
                    withCredentials: true,
                }
        );

            window.location.href = '/';

        } catch (error) {
            console.log('Failed login', error.response.data);
        }
    };

    return (
        <>
            <div className='auth-container'>
                <div className='auth-window'>
                    <h3 className='title-auth'>Авторизация</h3>
                    <div className='auth-fields'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email-auth"></label>
                            <input 
                                type="text" 
                                id="email-auth" 
                                name="email" 
                                placeholder="Email" 
                                autoComplete="off" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="password-auth"></label>
                            <input 
                                type="password" 
                                id="password-auth" 
                                name="password" 
                                placeholder="Пароль" 
                                autoComplete="off" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
            
                            <button type="submit">Войти</button>
                        </form>
                    </div>
                    <div className='auth-or-register'>
                        <div className='auth-line-container'>
                            <div className='auth-line auth-black-line'></div>
                            <div className='auth-line auth-gray-line'></div>
                        </div>
                        <Link to='/user/auth' className='link-auth'><h3 className='au-title'>Войти</h3></Link>
                        <Link to='/create_account' className='link-register'><h3 className='reg-title'>Создать аккаунт</h3></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;
