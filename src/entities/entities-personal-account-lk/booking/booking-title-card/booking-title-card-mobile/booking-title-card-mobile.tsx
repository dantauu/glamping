import Link from 'next/link'
import style from './booking-title-card-mobile.module.scss'

const BookingTitleCardMobile = () => {
   return (
      <div className={style.wrapper}>
        <div className={style.mainWrapper}>
            <Link href={'/personal-account-lk/home'} className={style.iconButton}>
                <img src={'/assets/img/arrow-slide.svg'} alt="" />
            </Link>
            <div className={style.textWrapper}>
               <div className={style.upText}>
                  <p className={style.upTextInner}>
                     Мои бронирования
                  </p>
                </div>
                <div className={style.bottomText}>
                  <p className={style.bottomTextInner}>
                     от 25.09.2024
                  </p>
                </div>
            </div>
        </div>
        <div className={style.bookingTitleCardWrapper}>
         <div className={style.rightPart}>
                <img className={style.rightPartImg} 
                src={'/assets/img/laguna-mobile.png'} alt="" />
            </div>
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
        </div>
    </div>
   )
}

export default BookingTitleCardMobile