import style from './register-number.module.scss'
import RenderButtons from '../render-register-mail/render-buttons'

const RegisterNumber = () => {
    return (
        <div className={style.registerWrapperBack}>
            <div className={style.register}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Регистрация
                    </h1>
                </div>
               <RenderButtons />
                <div className={style.input}>
                    <div className={style.inputInfoTitle}>
                        <p className={style.inputInfoTitleInner}>
                            Телефон
                        </p>
                    </div>
                    <div className={style.inputInfoTextWrapper}>
                        <div className={style.inputInfo}>
                            <input className={style.inputInner} type="text" />
                        </div> 
                    </div>
                </div>
            <div className={style.button}>
                <button className={style.buttonInner}>
                    Продолжить
                </button>
            </div>
            <div className={style.description}>
                <div className={style.leftPart}>
                    <p className={style.descriptionInner}>
                        Уже зарегистрированы?
                    </p>
                </div>
                <div className={style.rightPart}>
                    <p className={style.descriptionInnerRight}>
                        Войти
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RegisterNumber