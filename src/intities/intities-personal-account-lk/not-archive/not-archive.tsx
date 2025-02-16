import style from './not-archive.module.scss'

const NotArchive = () => {
    return (
        <div className={style.mainWrapper}>
        <div className={style.wrapper}>
            <div className={style.titleIcon}>
                <img src={'/assets/img/glamping.svg'} alt="" />
            </div>
            <div className={style.titleText}>
                <div className="">
                    <h2 className={style.titleTextInner}>
                        У вас пока небыло бронирований
                    </h2>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Завершенные бронирования будут отображаться в этом разделе
                    </p>
                </div>
            </div>
            <div className={style.button}>
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

export default NotArchive