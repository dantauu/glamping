import style from './header-extra.module.scss'

const HeaderExtra = () => {
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
            <div className={style.rightPart}>
                <div className={style.object}>
                    <div className={style.icon}>
                        <img src={'/assets/img/case.svg'} alt="" />
                    </div>
                    <div className={style.iconText}>
                        <p className={style.iconTextInner}>
                            Подключить объект
                        </p>
                    </div>
                </div>
                <div className={style.profile}>
                    <div className={style.profileIcon}>
                        <img src={'/assets/img/user-white.svg'} alt="" />
                    </div>
                    <div className={style.enter}>
                        <p className={style.enterInner}>
                            Войти
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.wrapperToBook}>
            <div className={style.bigToBook}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Больше бронирований, больше прибыли: станьте партнёром 
                        <span className={style.bold}> Glamping Russia</span> 
                    </h1>
                </div>
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
            </div>
            <div className={style.img}>
                <img src={'/assets/img/extra-net.png'} alt="" />
            </div>
        </div>
    </div>
    )
}

export default HeaderExtra