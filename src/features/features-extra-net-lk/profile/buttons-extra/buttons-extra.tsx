'use client'

import { useState } from 'react'
import { useRenderExtraProfile } from '@/providers/render-profile-extra/render-profile-extra'
import style from './buttons-extra.module.scss'


const ButtonsExtra = () => {
    const [active, setActive] = useState<string>('Личные данные')
    const { setRender } = useRenderExtraProfile()
    return (
        <div className={style.profileButtonsWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Найстроки профиля
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

export default ButtonsExtra