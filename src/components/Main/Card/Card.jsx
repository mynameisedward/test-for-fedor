import s from './Card.module.css'
import justLine from '../../../assets/justLine.svg'

const Card = ({title, text = "Рыба текст", imgSrc}) => {
    return (
        <div className={s.card}>
            <img src={imgSrc} alt="" className={s.image}/>
            <h3 className={s.title}>{title}</h3>
            <img src={justLine} alt="" className={s.justLine}/>
            <h4 className={s.text}>{text}</h4>
        </div>
    )
}

export default Card