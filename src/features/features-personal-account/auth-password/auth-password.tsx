import Link from 'next/link'
import style from './auth-password.module.scss'

const AuthPassord = () => {
    return (
        <div className={style.authPersonalWrapper}>
            <div className={style.leftImg}>
                <img className={style.leftImgInner}
                 src={'/assets/img/auth-personal.jpg'} alt="" />
            </div>
            <div className={style.rightPart}>
                <div className={style.textWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Войти по паролю
                    </h1>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                       Только для зарегистрированных пользователей
                    </p>
                </div>
                </div>
                <div className={style.inputBtn}>
                    <div className={style.numberEmailWrapper}>
                        <div className={style.numberEmail}>
                            <p className={style.numberEmailInner}>
                                Телефон или E-mail
                            </p>
                        </div>
                        <div className={style.input}>
                            <input className={style.inputInner} type="text" />
                        </div>
                    </div>
                    <div className={style.numberEmailWrapper}>
                        <div className={style.numberEmail}>
                            <p className={style.numberEmailInner}>
                                Пароль
                            </p>
                        </div>
                        <div className={style.inputWrapper}>
                            <div className={style.inputInnerWrapper}>
                                <input className={style.inputInnerPassword} type="password" />
                            </div>
                             <div className={style.iconOff}>
                                <img src={'/assets/img/off.svg'} alt="" />
                            </div>
                        </div>
                    </div>
                    <Link href={'/personal-account/recovery-password'} className={style.forgotPassword}>
                        <button className={style.forgotPasswordInner}>
                            Не помню пароль
                        </button>
                    </Link>
                    <Link href={'/personal-account-lk/home'} className={style.button}>
                        <button className={style.buttonInner}>
                            Войти
                        </button>
                    </Link>
                </div>
                <div className={style.orWrapper}>
                    <div className={style.border}></div>
                      <div className={style.or}>
                        <p className={style.orInner}>
                            Или
                        </p>    
                    </div>
                     <div className={style.border}></div>
                </div>
                <div className={style.buttonsWrapper}>
                    <Link href={'/personal-account/auth-code'} className={style.buttonItem}>
                        <button className={style.buttonEnter}>
                           Запросить код для входа
                        </button>
                    </Link>
                    <div className={style.buttonItem}>
                        <div className={style.icon}>
                            <img src={'/assets/img/google.svg'} alt="" />
                        </div>
                        <div className="">
                            <button className={style.buttonEnter}>
                                Войти через Google
                            </button>
                        </div>
                    </div>
                     <div className={style.buttonItem}>
                        <div className={style.icon}>
                            <img src={'/assets/img/vk.svg'} alt="" />
                        </div>
                        <div className="">
                            <button className={style.buttonEnter}>
                                Войти через Вконтакте
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.personalData}>
                    <p className={style.personalDataInner}>
                        Нажимая на кнопку «Получить код», вы соглашаетесь
                        c <span className={style.borderText}>обработкой персональных данных</span> и условиями <span className={style.borderText}>пользовательских соглашений</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthPassord