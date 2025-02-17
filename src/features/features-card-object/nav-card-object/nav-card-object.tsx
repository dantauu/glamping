import Link from "next/link"
import style from './nav-card-object.module.scss'

const NavCardObject = () => {
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
            <Link href={'/search'} className={style.text}>
                <p className={style.textInner}>
                    Результаты поиска
                </p>
            </Link>
             <div className="">
                <p className={style.slash}>
                    /
                </p>
            </div>
            <div className={style.text}>
                <p className={style.textInnerObject}>
                    Глэмпинг &quot;Лагуна&quot;
                </p>
            </div>
        </div>
    )
}

export default NavCardObject