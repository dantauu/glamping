'use client'

import Link from 'next/link'
import style from './header.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useState } from 'react'
import HeaderModalMobile from './header-modal-mobile/header-modal-mobile'

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 735px)')
    const [isActive, setIsActive] = useState<boolean>(false)
    const activeBurger = () => {
		setIsActive(!isActive)
	}
    return (
			<div className={style.headerWraper}>
				<div className={style.headerText}>
					<h1 className={style.headerLogoText}>
                        GLAMPING RUSSIA
                    </h1>
				</div>
				<div className={style.headerRight}>
					<div className={style.headerHeart}>
						<div className={style.headerHeartImg}>
							<img className={style.headerHeartImgInner}
                             src={'./assets/img/heart.svg'} alt='' />
						</div>
						<div className={style.headerCountHeart}>
							<p className={style.headerCountHeartText}>0</p>
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
                    ) : (
                        <>
                    <Link href={'/extra-net'} className={style.headerConnect}>
                        <div className={style.headerConnectImg}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V8M3 12L11.1877 15.639C11.7049 15.8688 12.2951 15.8688 12.8123 15.639L21 12M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H6.2C5.0799 8 4.51984 8 4.09202 8.21799C3.71569 8.40973 3.40973 8.71569 3.21799 9.09202C3 9.51984 3 10.0799 3 11.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        </div>
                        <div className=''>
                            <button className={style.headerConnectText}>
                                Подключить объект
                            </button>
                        </div>
                    </Link>
                    <Link href={'/personal-account/auth-code'} 
                        className={style.headerEnter}>
                        <div className=''>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75Z" />
                <path d="M20.4698 17.3202L20.3398 17.0002C19.9029 15.9026 19.1517 14.9584 18.1804 14.286C17.2091 13.6135 16.0609 13.2428 14.8798 13.2202H9.12978C7.94864 13.2428 6.80044 13.6135 5.82914 14.286C4.85784 14.9584 4.10666 15.9026 3.66978 17.0002L3.52977 17.3102C3.3117 17.8107 3.22042 18.3573 3.26403 18.9015C3.30763 19.4457 3.48478 19.9708 3.77977 20.4302C4.01999 20.8225 4.35644 21.1469 4.75721 21.3727C5.15798 21.5984 5.60979 21.7181 6.06978 21.7202H17.9198C18.3811 21.7179 18.8342 21.5983 19.2366 21.3726C19.6389 21.1469 19.9773 20.8226 20.2198 20.4302C20.5123 19.9717 20.688 19.4484 20.7315 18.9063C20.7751 18.3642 20.6853 17.8196 20.4698 17.3202Z" />
                            </svg>
                        </div>
                        <div className=''>
                            <button className={style.headerEnterText}>
                                Войти
                            </button>
                        </div>
                    </Link>
                        </>
                    )}
				</div>
                {isMobile && (
                    <HeaderModalMobile isActive={isActive} />
                )}
			</div>
		)
}

export default Header