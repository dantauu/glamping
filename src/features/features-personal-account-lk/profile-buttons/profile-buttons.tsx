'use client'

import { useState } from 'react'
import style from './profile-buttons.module.scss'


const ProfileButtons = () => {
    const [active, setActive] = useState<string>('Личные данные')
    return (
        <div className={style.profileButtonsWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Мой профиль
                </h1>
            </div>
            <div className={style.buttons}>
                <div className={style.button}>
                    <button onClick={() => 
                        {setActive('Личные данные')}} 
                        className={`
                            ${style.buttonItem} 
                            ${active === 'Личные данные' && style.active}`}>
                        Личные данные 
                    </button>
                </div>
                <div className={style.button}>
                    <button onClick={() => {setActive('Смена пароля')}}
                        className={`
                            ${style.buttonItem}
                            ${active === 'Смена пароля' && style.active}`}>
                        Смена пароля
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileButtons