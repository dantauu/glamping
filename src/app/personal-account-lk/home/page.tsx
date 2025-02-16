import BookingButtons from "@/intities/intities-personal-account-lk/buttons/booking-buttons"
import HeaderLk from "@/shared/ui/personal-account-ui/header-lk/header-lk"


const Home = () => {
    return (
        <div className="container">
            <HeaderLk />
            <BookingButtons />
        </div>
    )
}

export default Home