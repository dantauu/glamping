'use client'

import Link from 'next/link'
import style from './header-extra.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useState } from 'react'
import HeaderExtraModal from './header-extra-modal/header-extra-modal'

const HeaderExtra = () => {
const isMobile = useMediaQuery('(max-width: 845px)')
const isMobileImg = useMediaQuery('(max-width: 1340px)')
const [isActive, setIsActive] = useState<boolean>(false)
const activeBurger = () => {
    setIsActive(!isActive)
}
    return (
    <div className={style.fullWrapper}>
        <div className={style.headerExtraWrapper}>
            <div className={style.logoWrapper}>
                <div className="">
                    <h1 className={style.logoInner}>
                        GLAMPING RUSSIA
                    </h1>
                </div>
                <div className={style.rightText}>
                    <p className={style.rightTextInner}>
                        | Экстранет
                    </p>
                </div>
            </div>
            {isMobile ? (
                <div onClick={() => activeBurger()} className={style.mainBurgerWrapper}>
                            <div className={`${style.burgerWrapper} ${isActive && style.open}`}>
							<div className={style.burger}></div>
						    <div className={style.burger}></div>
						<div className={style.burger}></div>
					</div>
                </div>
            ): (
                <div className={style.rightPart}>
                <Link href={'/add-card-object/object'} className={style.object}>
                    <div className={style.icon}>
                        <img src={'/assets/img/case.svg'} alt="" />
                    </div>
                    <div className={style.iconText}>
                        <p className={style.iconTextInner}>
                            Подключить объект
                        </p>
                    </div>
                </Link>
                <Link href={'/extra-net-auth/register-mail-number'} 
                className={style.profile}>
                    <div className={style.profileIcon}>
                        <img src={'/assets/img/user-white.svg'} alt="" />
                    </div>
                    <div className={style.enter}>
                        <p className={style.enterInner}>
                            Войти
                        </p>
                    </div>
                </Link>
            </div>
            )}
        </div>
        <div className={style.wrapperToBook}>
            <div className={style.bigToBook}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Больше бронирований, больше прибыли: станьте партнёром 
                        <span className={style.bold}> Glamping Russia</span> 
                    </h1>
                </div>
                <div className={style.mobileWrapper}>
                    <div className={style.description}>
                        <p className={style.descriptionInner}>
                            Зарегистрируйте ваш объект размещения в Экстранет Glamping Russia и привлекайте новых гостей
                        </p>
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Зарегистрировать свой объект
                        </button>
                    </div>
                    {isMobileImg && (
                    <div className={style.mobileImg}>
                        <img className={style.mobileImgInner}
                            src={'/assets/img/extra-net.png'} alt="" />
                    </div>
                    )}
                </div>
            </div>
            <div className={style.img}>
                <img className={style.imgInner} src={'/assets/img/extra-net.png'} alt="" />
            </div>
        </div>
        {isMobile && (
            <HeaderExtraModal isActive={isActive} />
        )}
    </div>
    )
}

export default HeaderExtra