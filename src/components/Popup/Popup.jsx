import React, { useEffect, useState } from 'react';
import s from './Popup.module.css';
import crossIcon from '../../assets/cross.svg'
import jsonData from '../../users.json';

const AuthPopup = (props) => {
    const [login, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")


    
    useEffect(() => {
        
    }, [])


    const submitHandler = (event) => {
        event.preventDefault();


        const user = jsonData.find(u => u.login === login && u.password === password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = '/account'; // Редирект на страницу аккаунта
            console.log('Успешно')
        } else {
            console.log('Не успешно')
            setError('Неверный логин или пароль');
        }


    }


    return (
        <div className={s.overlay}>
            <div className={s.popup}>
                <h1 className={s.title}>Login</h1>
                <button className={s.closeButton} onClick={() => props.changeState(false)}>
                    <img src={crossIcon} alt="" />
                </button>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={(e) => setUsername(e.target.value)}
                        className={s.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={s.input}
                        required
                    />
                    <p className={s.error}>{error}</p>
                    <button type="submit" className={s.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
}
    ;

export default AuthPopup;