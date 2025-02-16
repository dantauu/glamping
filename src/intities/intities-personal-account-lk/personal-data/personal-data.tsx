import style from './personal-data.module.scss'

const PersonalData = () => {
    return (
        <div className={style.personalDataWrapper}>
            <div className={style.title}>
                <h2 className={style.titleInner}>
                    Личные данные
                </h2>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Укажите свои данные, чтобы при бронировании они заполнялись автоматически.
                </p>
            </div>
            <div className={style.inputNameWrapper}>
                <div className={style.surnameWrapper}>
                    <div className={style.surname}>
                        <p className={style.surnameInner}>
                           Фамилия
                        </p>
                    </div>
                    <div className={style.input}>
                        <input className={style.inputInner} type="text" />
                    </div>
                </div>
                <div className={style.surnameWrapper}>
                    <div className={style.surname}>
                        <p className={style.surnameInner}>
                           Имя
                        </p>
                    </div>
                    <div className={style.input}>
                        <input className={style.inputInner} type="text" />
                    </div>
                </div>
            </div>
            <div className={style.inputData}>
                <div className={style.inputDataItem}>
                    <input className={style.inputDataInner} placeholder='Дата рождения' type="text" />
                </div>
                <div className={style.inputDataIcon}>
                    <img src={'/assets/img/calendar.svg'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PersonalData