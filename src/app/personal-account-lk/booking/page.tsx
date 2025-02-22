import BookingTitleCard from "@/intities/intities-personal-account-lk/booking/booking-title-card/booking-title-card"
import style from './page.module.scss'

const BookingPage = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftContainer}>
                <BookingTitleCard />
            </div>
            <div className={style.rightContainer}>
                
            </div>
        </div>
    )
}

export default BookingPage