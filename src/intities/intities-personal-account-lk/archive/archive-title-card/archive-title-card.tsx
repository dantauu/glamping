import Link from 'next/link'
import style from './archive-title-card.module.scss'

const ArchiveTitleCard = () => {
    return (
    <div className={style.wrapper}>
        <Link href={'/personal-account-lk/home'} className={style.buttonWrapper}>
            <div className={style.iconButton}>
                <img src={'/assets/img/arrow-slide.svg'} alt="" />
            </div>
            <div className={style.button}>
                <button className={style.buttonInner}>
                    Мои бронирования
                </button>
            </div>
        </Link>
        <div className={style.bookingTitleCardWrapper}>
            <div className={style.leftPart}>
                <div className={style.title}>
                    <p className={style.titleInner}>
                        Глэмпинг «Лагуна»
                    </p>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Краснодарский край, Елизовский район
                    </p>
                </div>
                <div className={style.cardWrapper}>
                    <div className={style.cardIcon}>
                        <img src={'/assets/img/map.svg'} alt="" />
                    </div>
                    <div className={style.cardText}>
                        <p className={style.cardTextInner}>
                            Показать на карте
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.rightPart}>
                <img className={style.rightPartImg} 
                src={'/assets/img/lagunaOne.jpg'} alt="" />
            </div>
        </div>
    </div>
    )
}

export default ArchiveTitleCard