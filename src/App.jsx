import s from './App.module.css';
import Main from './components/Main/Main';
import Account from './components/Account/Account';
import Contacts from './components/Contacts/Contacts';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import AuthPopup from './components/Popup/Popup';


function App() {

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const toggleForPopup = () => {
        setIsPopupOpen(!isPopupOpen)
        console.log(isPopupOpen)
    }

    const changeIsPopUpOpen = (boolean) => {
        setIsPopupOpen(boolean)
    }



    return (
        <div className={s.App}>
            <Router>
                <header className={s.header}>
                    <div className={s.container}>
                        <h1 className={s.logo}>logo</h1>
                        <div className={s.buttons}>
                            <button className={s.button_first} onClick={() => {window.location.href = '/contacts'}}>Контакты</button>
                            <button className={s.button_second} onClick={() => setIsPopupOpen(true)}>Войти</button>
                        </div>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Main changeState={changeIsPopUpOpen}/>} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </main>
            </Router>
            {isPopupOpen && <AuthPopup changeState={changeIsPopUpOpen}/>}
        </div>
    );
}

export default App;
