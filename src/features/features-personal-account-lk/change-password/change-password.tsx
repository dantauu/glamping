import style from './change-password.module.scss'

const ChangePassword = () => {
    return (
        <div className={style.changePasswordWrapper}>
            <div className={style.title}>
                <h2 className={style.titleInner}>
                    Сменить пароль
                </h2>
            </div>
        <div className={style.inputFullWrapper}>
            <div className={style.inputWrapper}>
                <div className={style.inputItem}>
                    <div className={style.inputText}>
                        <p className={style.inputTextInner}>
                           Текущий пароль
                        </p>
                    </div>
                    <div className={style.inputIcon}>
                        <div className={style.input}>
                            <input className={style.inputInner} type="password" />
                        </div>
                        <div className={style.icon}>
                            <img src={'/assets/img/off.svg'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.inputWrapper}>
                <div className={style.inputItem}>
                    <div className={style.inputText}>
                        <p className={style.inputTextInner}>
                           Новый пароль
                        </p>
                    </div>
                    <div className={style.inputIcon}>
                        <div className={style.input}>
                            <input className={style.inputInner} type="password" />
                        </div>
                        <div className={style.icon}>
                            <img src={'/assets/img/off.svg'} alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Не менее 8 символов, включая буквы, цифры и символ
                    </p>
                </div>
            </div>
            <div className={`${style.inputWrapper} ${style.modifyPad}`}>
                <div className={style.inputItem}>
                    <div className={style.inputText}>
                        <p className={style.inputTextInner}>
                           Повторить пароль
                        </p>
                    </div>
                    <div className={style.inputIcon}>
                        <div className={style.input}>
                            <input className={style.inputInner} type="password" />
                        </div>
                        <div className={style.icon}>
                            <img src={'/assets/img/off.svg'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className={style.buttonsWrapper}>
            <div className={style.inputItem}>
                <button className={style.buttonInner}>
                    Обновить пароль
                </button>
            </div>
            <div className={style.inputItem}>
                <button className={`${style.buttonInner} ${style.buttonPassword}`}>
                    Не помню пароль
                </button>
            </div>
          </div>
        </div>
    )
}

export default ChangePassword