import React from 'react'
import s from './Account.module.css'


const Account = () => {

    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!user) {
        window.location.href = '/'; // Редирект на страницу авторизации, если пользователь не авторизован
        return null;
    }

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = '/'; // Редирект на страницу авторизации
    };
    const handleRedirectToContacts = () => {
        window.location.href = '/contacts';
    }

    return (
        <div className={s.account}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>Привет, {user.name} </h1>
                    <div className={s.buttons}>
                        <button className={s.first_button} onClick={handleLogout}>Выйти из аккаунта</button>
                        <button className={s.second_button} onClick={handleRedirectToContacts}>Перейти в контакты</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account