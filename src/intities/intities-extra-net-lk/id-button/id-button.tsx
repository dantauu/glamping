import style from './id-button.module.scss'

const IdButton = () => {
    return (
        <div className={style.idButtonWrapper}>
            <div className={style.text}>
                <p className={style.textInner}>
                    Глэмпинг «Лагуна»
                </p>
            </div>
            <div className={style.id}>
                <p className={style.idInner}>
                    ID: 5687562591
                </p>
            </div>
            <div className={style.arrow}>
                <img src={'/assets/img/iconArrow.svg'} alt="" />
            </div>
        </div>
    )
}

export default IdButton