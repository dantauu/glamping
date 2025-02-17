import Link from 'next/link'
import style from './nav-search.module.scss'

const NavSearch = () => {
    return (
        <div className={style.navSearchWrapper}>
            <Link href={'/home'} className={style.img}>
                <img src={'./assets/img/home.svg'} alt="" />
            </Link>
            <div className="">
                <p className={style.slash}>
                    /
                </p>
            </div>
            <div className={style.text}>
                <p className={style.textInner}>
                    Результаты поиска
                </p>
            </div>
        </div>
    )
}

export default NavSearch