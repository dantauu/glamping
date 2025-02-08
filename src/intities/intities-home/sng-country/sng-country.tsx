import style from './sng-country.module.scss'

const SngCountry = () => {
    return (
        <div className={style.sngBack}>
            <div className={style.sngWrapper}>
                <div className={style.sngText}>
                    <p className={style.textInner}>
                       Подборка отелей
                    </p>
                </div>
                <div className={style.description}>
                    <h1 className={style.descriptionInner}>
                        Отдых в странах СНГ
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default SngCountry