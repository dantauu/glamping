'use client'

import { useState } from 'react'
import style from './profile-buttons.module.scss'
import { useRenderProfile } from '@/providers/render-my-profile/render-my-profile'


const ProfileButtons = () => {
    const [active, setActive] = useState<string>('Личные данные')
    const { setRender } = useRenderProfile()
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
                        {setActive('Личные данные'), setRender('Личные данные')}} 
                        className={`
                            ${style.buttonItem} 
                            ${active === 'Личные данные' && style.active}`}>
                        Личные данные 
                    </button>
                </div>
                <div className={style.button}>
                    <button onClick={() => {
                        setActive('Смена пароля'), setRender('Смена пароля')}}
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