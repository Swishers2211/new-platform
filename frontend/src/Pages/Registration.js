import React from 'react'
import { Link } from 'react-router-dom'

import '../Css/Registration.css'

function Registration() {
    return (
        <>
            <div className='register-container'>
                <div className='register-window'>
                    <h3 className='create-account-title'>Создание аккаунта</h3>
                    <div className='register-fields'>
                        <form action="#" method="post">
                            <label for="username"></label>
                            <input type="text" id="username" name="username" placeholder="username" autocomplete="off"/>

                            <label for="email"></label>
                            <input type="text" id="email" name="email" placeholder="Email" autocomplete="off"/>
            
                            <label for="password"></label>
                            <input type="text" id="password" name="password" placeholder="Пароль" autocomplete="off"/>
            
                            <button type="submit">Создать аккаунт</button>
                        </form>
                    </div>
                    <div className='register-or-auth'>
                        <div className='line-container'>
                            <div className='line black-line'></div>
                            <div className='line gray-line'></div>
                        </div>
                        <Link to='/auth' className='auth-link'><h3 className='auth-title'>Войти</h3></Link>
                        <Link to='/create_account' className='register-link'><h3 className='register-title'>Создать аккаунт</h3></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;
