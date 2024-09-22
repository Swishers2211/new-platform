import React from 'react'
import { Link } from 'react-router-dom'

import '../Css/Auth.css'

function Auth() {
    return (
        <>
            <div className='auth-container'>
                <div className='auth-window'>
                    <h3 className='title-auth'>Авторизация</h3>
                    <div className='auth-fields'>
                        <form action="#" method="post">
                            <label for="username"></label>
                            <input type="text" id="username" name="username-auth" placeholder="username" autocomplete="off"/>

                            <label for="email"></label>
                            <input type="text" id="email-auth" name="email" placeholder="Email" autocomplete="off"/>

                            <label for="password"></label>
                            <input type="text" id="password-auth" name="password" placeholder="Пароль" autocomplete="off"/>
            
                            <button type="submit">Войти</button>
                        </form>
                    </div>
                    <div className='auth-or-register'>
                        <div className='auth-line-container'>
                            <div className='auth-line auth-black-line'></div>
                            <div className='auth-line auth-gray-line'></div>
                        </div>
                        <Link to='/auth' className='link-auth'><h3 className='au-title'>Войти</h3></Link>
                        <Link to='/create_account' className='link-register'><h3 className='reg-title'>Создать аккаунт</h3></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;
