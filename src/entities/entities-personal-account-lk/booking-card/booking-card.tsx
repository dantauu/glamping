'use client'

import Link from 'next/link'
import { bookingCardItemsNoPay, bookingCardItemsPay } from '../../../../public/data/data'
import style from './booking-card.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import BookingCardMobile from './booking-card-mobile/booking-card-mobile'

const BookingCard = () => {
    const isMobile = useMediaQuery('(max-width: 795px)')
    return (
        <>
        {isMobile ? <BookingCardMobile /> : (
            <>
                <div className={style.bookingCardWrapper}>
            <div className={style.titlePay}>
                <div className={style.titlePayText}>
                    <p className={style.titlePayTextInner}>
                        Номер брони 45-85612 <span className={style.date}>
                            от 25.09.2024</span>
                    </p>
                </div>
                <div className={style.checkWrapper}>
                    <div className={style.checkIcon}>
                        <img src={'/assets/img/check-green.svg'} alt="" />
                    </div>
                    <div className={style.checkText}>
                        <p className={style.checkTextInner}>
                            Бронь подтверждена
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.cardWrapper}>
                {bookingCardItemsPay.map((itemCard, index) => (
                    <Link href={'/personal-account-lk/booking'} 
                        key={index} className={style.itemCard}>
                        <div className={style.img}>
                            <img className={style.imgInner} src={itemCard.img} alt="" />
                        </div>
                        <div className={style.rightPart}>
                            <div className={style.titleWrapper}>
                                <div className={style.titleCardWrapper}>
                                    <div className="">
                                        <p className={style.titleInner}>
                                            {itemCard.title}
                                        </p>
                                    </div>
                                    <div className={style.description}>
                                        <p className={style.descriptionInner}>
                                            {itemCard.description}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.cardIconPriceWraper}>
                                    <div className={style.cardIconPrice}>
                                        <div className={style.cardIcon}>
                                            <img src={itemCard.iconCard} alt="" />
                                        </div>
                                        <div className={style.cardIconText}>
                                            <p className={style.cardIconTextInner}>
                                                {itemCard.textCard}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.price}>
                                        <p className={style.priceInner}>
                                            {itemCard.price} р.
                                        </p>
                                    </div>
                                    <Link href={'/personal-account-lk/booking'}     className={style.button}>
                                        <button className={style.buttonInner}>
                                            {itemCard.buttonText}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className={style.itemsWrapper}>
                                {itemCard.icons.map((icons, index) => (
                                    <div key={index} className={style.items}>
                                        <div className={style.itemIcon}>
                                            <img className={style.itemIconInner}
                                             src={icons} alt="" />
                                        </div>
                                        <div key={index} className={style.itemText}>
                                            <p className={style.itemTextInner}>
                                                {itemCard.text[index]}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        <div className={style.bookingCardWrapper}>
            <div className={style.titlePay}>
                <div className={style.titlePayText}>
                    <p className={style.titlePayTextInner}>
                        Номер брони 45-85612 <span className={style.date}>
                            от 25.09.2024</span>
                    </p>
                </div>
                <div className={style.krestWrapper}>
                    <div className={style.checkIcon}>
                        <img src={'/assets/img/krest-or.svg'} alt="" />
                    </div>
                    <div className={style.checkText}>
                        <p className={style.krestTextInner}>
                            Отменено
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.cardWrapper}>
                {bookingCardItemsNoPay.map((itemCard, index) => (
                    <div key={index} className={style.itemCard}>
                        <div className={style.img}>
                            <img className={style.imgInner} src={itemCard.img} alt="" />
                        </div>
                        <div className={style.rightPart}>
                            <div className={style.titleWrapper}>
                                <div className={style.titleCardWrapper}>
                                    <div className="">
                                        <p className={style.titleInner}>
                                            {itemCard.title}
                                        </p>
                                    </div>
                                    <div className={style.description}>
                                        <p className={style.descriptionInner}>
                                            {itemCard.description}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.cardIconPriceWraper}>
                                    <div className={style.cardIconPrice}>
                                        <div className={style.cardIcon}>
                                            <img src={itemCard.iconCard} alt="" />
                                        </div>
                                        <div className={style.cardIconText}>
                                           <p className={style.cardIconTextInnerNoPay}>
                                                {itemCard.textCard}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.price}>
                                        <p className={style.priceInnerNoPay}>
                                            {itemCard.price} р.
                                        </p>
                                    </div>
                                    <div className={style.button}>
                                        <button className={style.buttonInnerArchive}>
                                            {itemCard.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.itemsWrapper}>
                                {itemCard.icons.map((icons, index) => (
                                    <div key={index} className={style.items}>
                                        <div className={style.itemIcon}>
                                            <img className={style.itemIconInner}
                                             src={icons} alt="" />
                                        </div>
                                        <div key={index} className={style.itemText}>
                                            <p className={style.itemTextInner}>
                                                {itemCard.text[index]}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            </>
        )}
        </>
    )
}

export default BookingCard