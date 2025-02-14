import Link from 'next/link'
import style from './header.module.scss'

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <div className={style.logo}>
                <h1 className={style.logoInner}>
                    GLAMPING RUSSIA
                </h1>
            </div>
            <Link href={'/'} className={style.button}>
                <div className={style.buttonIcon}>
                    <img src={'/assets/img/exit.svg'} alt="" />
                </div>
                <div className="">
                    <button className={style.buttonInner}>
                        Вернуться на главную
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default Header