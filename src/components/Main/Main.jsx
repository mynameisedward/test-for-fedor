import s from './Main.module.css'
import Card from './Card/Card'
import heart from '../../assets/heart.svg'
import ears from '../../assets/ears.svg'
import planshet from '../../assets/planshet.svg'



const Main = ({changeState}) => {


    return (
        <div className={s.main}>
            <div className={s.container}>

                <div className={s.main_content}>
                    <h1 className={s.title}>Место для получения медицинской помощи</h1>
                    <div className={s.buttons}>
                        <button className={s.button_first} onClick={() => changeState(true)}>Войти</button>
                        <button className={s.button_second}>Контакты</button>
                    </div>
                </div>
                <div className={s.main_cards}>
                    <Card title="Онлайн-прием" imgSrc={heart} />
                    <Card title="Экстренный случай" imgSrc={ears} />
                    <Card title="Лечение рака" imgSrc={planshet} />
                </div>
            </div>
        </div>
    )
}

export default Main