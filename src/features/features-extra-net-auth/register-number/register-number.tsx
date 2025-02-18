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
            </div>
        </div>
    )
}

export default RegisterNumber