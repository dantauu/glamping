import style from './booking-contacts.module.scss'

const BookingContacts = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.mainTitle}>
                <h2 className={style.mainTitleInner}>
                    Контакты для связи с отелем
                </h2>
            </div>
            <div className={style.bookingContactsWrapper}>
                <div className={style.iconWrapper}>
                    <div className={style.iconItem}>
                        <div className={style.icon}>
                            <img src={'/assets/img/phone.svg'} alt="" />
                        </div>
                        <div className={style.iconText}>
                            <p className={style.iconTextInner}>
                                +7 (909) 999-85-32
                            </p>
                        </div>
                    </div>
                    <div className={style.iconItem}>
                        <div className={style.icon}>
                            <img src={'/assets/img/telegram.svg'} alt="" />
                        </div>
                        <div className={style.iconText}>
                            <p className={style.iconTextInner}>
                                написать в Telegram
                            </p>
                        </div>
                    </div>
                    <div className={style.iconItem}>
                        <div className={style.icon}>
                            <img src={'/assets/img/mail.svg'} alt="" />
                        </div>
                        <div className={style.iconText}>
                            <p className={style.iconTextInner}>
                                test@mail.ru
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.buttonsWrapper}>
                    <div className={style.buttonItem}>
                        <button className={style.buttonItemInner}>
                            Чат с отелем
                        </button>
                    </div>
                    <div className={style.buttonItem}>
                        <button className={style.buttonItemInner}>
                            Тех. поддержка
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.button}>
                <button className={style.buttonInner}>
                    Отменить бронирование
                </button>
            </div>
        </div>
    )
}

export default BookingContacts