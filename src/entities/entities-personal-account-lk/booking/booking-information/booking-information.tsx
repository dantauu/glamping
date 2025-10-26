'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import style from './booking-information.module.scss'
import BookingInformationMobile from './booking-information-mobile/booking-information-mobile'

const BookingInformation = () => {
    const isMobile = useMediaQuery('(max-width: 890px)')
    return (
        <>
        {isMobile ? <BookingInformationMobile /> : (
            <div className={style.wrapper}>
            <div className={style.mainTitle}>
                <h2 className={style.mainTitleInner}>
                    Информация о номере/ доме
                </h2>
            </div>
            <div className={style.bookingInformationWrapper}>
                <div className={style.leftPart}>
                    <div className={style.title}>
                        <p className={style.titleInner}>
                            Эко-домик
                        </p>
                    </div>
                    <div className={style.wrapperItems}>
                        <div className={style.item}>
                            <div className={style.icon}>
                                <img className={`${style.iconInner} 
                                ${style.modifyWidth}`}
                                    src={'/assets/img/mashtab-icon.svg'} alt="" />
                            </div>
                            <div className={style.itemText}>
                                <p className={style.itemTextInner}>
                                    32 м²
                                </p>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.icon}>
                                <img className={style.iconInner} 
                                    src={'/assets/img/solo.svg'} alt="" />
                            </div>
                            <div className={style.itemText}>
                                <p className={style.itemTextInner}>
                                   ×3  (Один ребёнок до 14 лет — можно без отдельного спального места)
                                </p>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.icon}>
                                <img className={style.iconInner} 
                                    src={'/assets/img/bed.svg'} alt="" />
                            </div>
                            <div className={style.itemText}>
                                <p className={style.itemTextInner}>
                                    1 двуспальная кровать
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.comfortWrapper}>
                        <div className={style.comfortItem}>
                            <p className={style.comfortItemInner}>
                                Wi-Fi
                            </p>
                        </div>
                        <div className={style.comfortItem}>
                            <p className={style.comfortItemInner}>
                                Вид на горную реку
                            </p>
                        </div>
                        <div className={style.comfortItem}>
                            <p className={style.comfortItemInner}>
                                Ванная комната
                            </p>
                        </div>
                        <div className={style.comfortItem}>
                            <p className={style.comfortItemInner}>
                                Фен
                            </p>
                        </div>
                        <div className={style.comfortItem}>
                            <p className={style.comfortItemInner}>
                                Мангал
                            </p>
                        </div>
                    </div>
                    <div className={style.showComfort}>
                        <p className={style.showComfortInner}>
                            Показать удобства
                        </p>
                    </div>
                </div>
                <div className={style.rightPart}>
                    <img className={style.rightPartInner} 
                        src={'/assets/img/search-card-1.jpg'} alt="" />
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default BookingInformation