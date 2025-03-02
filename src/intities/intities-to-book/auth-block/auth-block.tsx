import style from './auth-book.module.scss'

const AuthBlock = () => {
    return (
        <div className={style.authBlockWrapper}>
            <div className={style.titleWrapper}>
                <div className={style.titleUp}>
                    <p className={style.titleUpInner}>
                        Уже зарегистрированы?
                    </p>
                </div>
                <div className={style.titleBottom}>
                    <p className={style.titleBottomInner}>
                        Авторизуйтесь и ускорьте бронирование
                    </p>
                </div>
            </div>
            <div className={style.buttonWrapper}>
                <div className={style.iconProfile}>
                    <img src={'/assets/img/user.svg'}
                     className={style.iconProfileInner} alt="" />
                </div>
                <div className="">
                    <button className={style.buttonInner}>
                        Войти в личный кабинет
                    </button>
                </div>
            </div>
            <div className={style.img}>
                <img src={'/assets/img/arrow-porabola.svg'} alt="" />
            </div>
        </div>
    )
}

export default AuthBlock