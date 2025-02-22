import BookingTitleCard from "@/intities/intities-personal-account-lk/booking/booking-title-card/booking-title-card"
import style from './page.module.scss'
import BookingInformation from "@/intities/intities-personal-account-lk/booking/booking-information/booking-information"
import BookingContacts from "@/intities/intities-personal-account-lk/booking/booking-contacts/booking-contacts"
import BookingCheck from "@/intities/intities-personal-account-lk/booking/booking-check/booking-check"

const BookingPage = () => {
    return (
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
    )
}

export default BookingPage