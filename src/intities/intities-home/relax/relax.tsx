import style from './relax.module.scss'

const Relax = () => {
    return (
        <div className={style.relaxBack}>
            <div className={style.relaxWrapper}>
                <div className={style.relaxText}>
                    <h1 className={style.textInner}>
                        ГЛЭМПИНГИ ДЛЯ РЕЛАКСАЦИИ
                    </h1>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Красивые виды, спа-процедуры, йога-ретриты, медитации
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Relax