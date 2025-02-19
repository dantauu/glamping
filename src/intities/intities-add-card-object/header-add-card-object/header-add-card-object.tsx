import style from './header-add-card-object.module.scss'

const HeaderAddCardObject = () => {
    return (
        <div className={style.headerAddWrapper}>
            <div className={style.titleWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        GLAMPING RUSSIA
                    </h1>
                </div>
                <div className={style.titleText}>
                    <p className={style.titleTextInner}>
                        | Экстранет
                    </p>
                </div>
            </div>
            <div className={style.rightPartWrapper}>
                <div className={style.logo}>
                    <img src={'/assets/img/world.svg'} alt="" />
                </div>
                <div className={style.loginWrapper}>
                    <div className={style.login}>
                        <div className={style.name}>
                            <p className={style.nameInner}>
                                Татьяна
                            </p>
                        </div>
                        <div className={style.email}>
                            <p className={style.emailInner}>
                                Ivanova@mail.ru
                            </p>
                        </div>
                    </div>
                    <div className={style.iconArrow}>
                        <img src={'/assets/img/arrow-next.svg'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAddCardObject