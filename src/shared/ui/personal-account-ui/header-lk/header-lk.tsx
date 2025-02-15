'use client'

import { useState } from 'react'
import style from './header-lk.module.scss'

const HeaderLk = () => {
    const [active, setActive] = useState('Бронирования')
    return (
        <div className={style.headerLkWrapper}>
            <div className={style.logo}>
                <h1 className={style.logoInner}>
                    GLAMPING RUSSIA
                </h1>
            </div>
            <div className={style.navItemsWrapper}>
                <div onClick={() => setActive('Бронирования')} 
                    className={`
                        ${style.navItem} 
                        ${active === 'Бронирования' && style.active}`}>
                    <p className={style.navItemInner}>
                        Бронирования
                    </p>
                </div>
                <div onClick={() => setActive('Отзывы')} 
                    className={`
                        ${style.navItem} 
                        ${active === 'Отзывы' && style.active}`}>
                    <p className={style.navItemInner}>
                        Отзывы
                    </p>
                </div>
                <div onClick={() => setActive('Мой профиль')} 
                    className={`
                        ${style.navItem}
                        ${active === 'Мой профиль' && style.active}`}>
                    <p className={style.navItemInner}>
                        Мой профиль
                    </p>
                </div>
            </div>
            <div className={style.rightPart}>
                <div className={style.likeWrapper}>
                    <img src={'/assets/img/heart.svg'} alt="" />
                </div>
                <div className={style.notify}>
                    <img src={'/assets/img/notify.svg'} alt="" />
                </div>
                <div className={style.numberWrapper}>
                    <div className={style.prodile}>
                        <img src={'/assets/img/user.svg'} alt="" />
                    </div>
                    <div className={style.number}>
                        <p className={style.numberInner}>
                            +7 909 999...
                        </p>
                    </div>
                    <div className={style.arrow}>
                        <img src={'/assets/img/arrow-next.svg'} alt="" />
                    </div>
                </div>
                <div className={style.countNotify}>
                    <p className={style.countNotifyInner}>
                        1
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderLk