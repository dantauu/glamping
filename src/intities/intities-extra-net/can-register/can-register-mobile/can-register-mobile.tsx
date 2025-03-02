import style from './can-register-mobile.module.scss'

const CanRegisterMobile = () => {
    return (
        <div className={style.canRegisterWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Зарегистрировать объект могут:
                </h1>
            </div>
            <div className={style.wrapper}>
            <div className={style.borderBoxClean}></div>
            <div className={style.borderBoxCleanTwo}></div>
            <div className={style.borderBoxCleanThree}></div>
            <div className={style.borderBoxIndivid}>
                <p className={style.borderBoxIndividInner}>
                    Индивидуальные предприниматели
                </p>
            </div>
            <div className={style.borderBoxFace}>
                <p className={style.borderBoxIndividInner}>
                    Юридические лица
                </p>
            </div>
            <div className={style.borderBoxSolo}>
                <p className={style.borderBoxIndividInner}>
                    Самозанятые
                </p>
            </div>
            </div>
        </div>
    )
}

export default CanRegisterMobile