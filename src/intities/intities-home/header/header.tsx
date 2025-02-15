import Link from 'next/link'
import style from './header.module.scss'

const Header = () => {
    return (
			<div className={style.headerWraper}>
				<div className='header-text'>
					<h1 className={style.headerLogoText}>GLAMPING RUSSIA</h1>
				</div>
				<div className={style.headerRight}>
					<div className={style.headerHeart}>
						<div className='header-heart'>
							<img src={'./assets/img/heart.svg'} alt='' />
						</div>
						<div className={style.headerCountHeart}>
							<p className={style.headerCountHeartText}>0</p>
						</div>
					</div>
                    <div className={style.headerConnect}>
                        <div className="header__connect-img">
                            <img className={style.headerConnectImg} 
                                src={'./assets/img/case.svg'} alt='' />
                        </div>
                        <div className=''>
                            <button className={style.headerConnectText}>
                                Подключить объект
                            </button>
                        </div>
                    </div>
                    <Link href={'/personal-account/auth-password'} className={style.headerEnter}>
                        <div className=''>
                            <img className={style.headerEnterImg} 
                                src={'./assets/img/user.svg'} alt='' />
                        </div>
                        <div className=''>
                            <button className={style.headerEnterText}>
                                Войти
                            </button>
                        </div>
                    </Link>
				</div>
			</div>
		)
}

export default Header