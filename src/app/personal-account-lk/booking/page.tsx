'use client'

import BookingTitleCard from "@/entities/entities-personal-account-lk/booking/booking-title-card/booking-title-card"
import style from './page.module.scss'
import BookingInformation from "@/entities/entities-personal-account-lk/booking/booking-information/booking-information"
import BookingContacts from "@/entities/entities-personal-account-lk/booking/booking-contacts/booking-contacts"
import BookingCheck from "@/entities/entities-personal-account-lk/booking/booking-check/booking-check"
import { useMediaQuery } from "@/hooks/useMediaQuery"

const BookingPage = () => {
    const isMobile = useMediaQuery('(max-width: 1360px)')
    return (
        <>
        {isMobile ? (
            <div className={style.wrapperMobile}>
                <BookingTitleCard />
                <BookingCheck />
                <BookingInformation />
                <BookingContacts />
            </div>
        ) : (
        <div className={style.wrapper}>
            <div className={style.leftContainer}>
                <BookingTitleCard />
                <BookingInformation />
                <BookingContacts />
            </div>
            <div className={style.rightContainer}>
                <BookingCheck />
            </div>
        </div>
        )}
        
        </>
    )
}

export default BookingPage