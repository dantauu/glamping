import Link from 'next/link'
import style from './auth-code.module.scss'

const AuthCode = () => {
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
                        Войти или зарегистрироваться
                    </h1>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Введите номер телефона или E-mail, на который придёт код для входа.
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
                    <Link href={'/personal-account/confirm-number'} className={style.button}>
                        <button className={style.buttonInner}>
                            Получить код
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
                    <Link href={'/personal-account/auth-password'} className={style.buttonItem}>
                        <button className={style.buttonEnter}>
                            Войти по паролю
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

export default AuthCode