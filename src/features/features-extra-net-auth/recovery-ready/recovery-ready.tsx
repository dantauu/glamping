import style from './recovery-ready.module.scss'

const RecoveryReadyExtra = () => {
    return (
        <div className={style.recoveryReadyWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Восстановление пароля
                </h1>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Мы отправили вам на почту 
                    <span className={style.bold}> Ivanov@mail.ru</span> письмо для восстановления пароля.
                </p>
            </div>
        </div>
    )
}

export default RecoveryReadyExtra