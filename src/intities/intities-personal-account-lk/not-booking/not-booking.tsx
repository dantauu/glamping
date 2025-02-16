import style from './not-booking.module.scss'

const NotBooking = () => {
    return (
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
            <div className={style.titleIcon}>
                <img src={'/assets/img/glamping.svg'} alt="" />
            </div>
            <div className={style.titleText}>
                <h2 className={style.titleTextInner}>
                    У вас пока нет предстоящих бронирований
                </h2>
            </div>
            <div className={style.button}>
                <div className={style.buttonIcon}>
                    <img src={'/assets/img/search.svg'} alt="" />
                </div>
                <div className={style.buttonItem}>
                    <button className={style.buttonInner}>
                        Подобрать место для отдыха
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NotBooking