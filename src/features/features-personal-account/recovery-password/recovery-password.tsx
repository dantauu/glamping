import Link from 'next/link'
import style from './recovery-password.module.scss'

const RecoveryPassword = () => {
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
                        Восстановление пароля
                    </h1>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Введите E-mail или телефон
                    </p>
                </div>
                </div>
                <div className={style.inputBtn}>
                    <div className={style.numberEmailWrapper}>
                        <div className={style.numberEmail}>
                            <p className={style.numberEmailInner}>
                               E-mail/ телефон
                            </p>
                        </div>
                        <div className={style.input}>
                            <input className={style.inputInner} type="text" />
                        </div>
                    </div>
                    <div className={style.button}>
                        <button className={style.buttonInner}>
                            Сбпросить пароль
                        </button>
                    </div>
                </div>
                <Link href={'/personal-account/auth-password'} className={style.personalData}>
                    <p className={style.personalDataInner}>
                        Вернуться ко входу
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default RecoveryPassword