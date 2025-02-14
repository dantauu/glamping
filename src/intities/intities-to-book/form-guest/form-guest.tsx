import style from './form-guest.module.scss'

const FormGuest = () => {
    return (
        <div className={style.formGuestWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Данные гостей
                </h1>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Гость, на которого оформляется бронь 
                </p>
            </div>
            <div className={style.inputWrapper}>
                <div className={style.inputItem}>
                    <input className={style.inputItemInner}
                     placeholder='Фамилия' type="text" />
                </div>
                <div className={style.inputItem}>
                    <input className={style.inputItemInner}
                     placeholder='Имя' type="text" />
                </div>
            </div>
            <div className={style.plusWrapper}>
                <div className={style.plus}>
                <div className={style.plusIcon}>
                    <img src={'/assets/img/plus-green.svg'}
                     className={style.plusIconInner} alt="" />
                </div>
                <div className={style.plusText}>
                    <div className={style.plusTextTitle}>
                        <p className={style.plusTextTitleInner}>
                            Добавить гостей
                        </p>
                    </div>
                </div>
                </div>
                    <div className={style.plusTextDescription}>
                        <p className={style.plusTextDescriptionInner}>
                            (необязательно)
                        </p>
                    </div>
                </div>
            <div className={style.data}>
                <div className={style.dataIcon}>
                    <img className={style.dataIconInner}
                     src={'/assets/img/alert-gray.svg'} alt="" />
                </div>
                <div className={style.dataText}>
                    <p className={style.dataTextInner}>
                        Данные всех гостей нужны для визы или при заселении в разное время
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FormGuest