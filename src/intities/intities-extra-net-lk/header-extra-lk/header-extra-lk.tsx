'use client'

import { useState } from 'react'
import style from './header-extra-lk.module.scss'
import Link from 'next/link'

const HeaderExtraLk = () => {
    const [active, setActive] = useState('Мои объекты')
    return (
        <div className={style.headerLkWrapper}>
            <div className={style.logoWrapper}>
                <div className={style.logo}>
                    <h1 className={style.logoInner}>
                        GLAMPING RUSSIA
                    </h1>
                </div>
                <div className={style.logoText}>
                    <p className={style.logoTextInner}>
                        | Экстранет
                    </p>
                </div>
            </div>
            <div className={style.navItemsWrapper}>
                <Link href={'/extra-net-lk/my-object'} onClick={() => setActive('Мои объекты')} 
                    className={`
                        ${style.navItem} 
                        ${active === 'Мои объекты' && style.active}`}>
                    <p className={style.navItemInner}>
                        Мои объекты
                    </p>
                </Link>
                <Link href={'/extra-net-lk/analytics'}
                 onClick={() => setActive('Отзывы')} 
                    className={`
                        ${style.navItem} 
                        ${active === 'Отзывы' && style.active}`}>
                    <p className={style.navItemInner}>
                        Аналитика
                    </p>
                </Link>
                <Link href={'/extra-net-lk/balance'} onClick={() => setActive('Баланс')} 
                    className={`
                        ${style.navItem}
                        ${active === 'Баланс' && style.active}`}>
                    <p className={style.navItemInner}>
                        Баланс
                    </p>
                </Link>
                <Link href={''} onClick={() => setActive('Бронирования')} 
                    className={`
                        ${style.navItem}
                        ${active === 'Бронирования' && style.active}`}>
                    <p className={style.navItemInner}>
                        Бронирования
                    </p>
                </Link>
            </div>
            <div className={style.rightPart}>
                <div className={style.notify}>
                    <img src={'/assets/img/notify.svg'} alt="" />
                </div>
                <div className={style.numberWrapper}>
                    <div className={style.profile}>
                        <img src={'/assets/img/world.svg'} alt="" />
                    </div>
                    <div className={style.numberEmail}>
                        <div className={style.number}>
                            <p className={style.numberInner}>
                                Татьяна
                            </p>
                        </div>
                        <div className={style.email}>
                            <p className={style.emailInner}>
                                Ivanov@mail.ru
                            </p>
                        </div>
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

export default HeaderExtraLk