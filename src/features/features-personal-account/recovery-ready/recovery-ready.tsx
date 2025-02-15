import style from './recovery-ready.module.scss'

const RecoveryReady = () => {
    return (
        <div className={style.recoveryWrapperFull}>
            <div className={style.recoveryWrapper}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Восстановление пароля
                    </h1>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Мы отправили вам на почту <span className={style.bold}>Gmail@mail.ru</span> письмо для восстановления пароля.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecoveryReady