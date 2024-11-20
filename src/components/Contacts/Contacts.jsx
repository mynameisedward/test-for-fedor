import React from 'react'
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>Контакты</h1>
                </div>
            </div>
        </div>
    )
}

export default Contacts