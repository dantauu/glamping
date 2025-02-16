import style from './bind.module.scss'

const Bind = () => {
    return (
        <div className={style.bindWrapper}>
            <div className={style.title}>
                <h2 className={style.titleInner}>
                    Привязать аккаунт
                </h2>
            </div>
            <div className={style.linkWrapper}>
                <div className={style.linkItem}>
                  <div className={style.linkLeft}>
                    <div className={style.linkIcon}>
                        <div className={style.icon}>
                            <img src={'/assets/img/google.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.linkText}>
                        <p className={style.linkTextInner}>
                            Google
                        </p>
                    </div>
                </div>
                    <div className={style.link}>
                        <p className={style.linkInner}>
                            Подключить
                        </p>
                    </div>
                </div>
                <div className={style.linkItem}>
                  <div className={style.linkLeft}>
                    <div className={style.linkIcon}>
                        <div className={style.icon}>
                            <img src={'/assets/img/vk.svg'} alt="" />
                        </div>
                    </div>
                        <div className={style.linkText}>
                            <p className={style.linkTextInner}>
                                VK
                            </p>
                        </div>
                    </div>
                    <div className={style.link}>
                        <p className={style.linkInner}>
                            Подключить
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.button}>
                <button className={style.buttonInner}>
                    Удалить профиль
                </button>
            </div>
        </div>
    )
}

export default Bind