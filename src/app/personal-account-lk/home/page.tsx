import BookingButtons from "@/intities/intities-personal-account-lk/buttons/booking-buttons"
import { RenderBookingProvider } from "@/providers/render-booking-context/render-booking-context"
import HeaderLk from "@/shared/ui/personal-account-ui/header-lk/header-lk"


const Home = () => {
    return (
			<div className='container'>
				<RenderBookingProvider>
					<HeaderLk />
					<BookingButtons />
				</RenderBookingProvider>
			</div>
		)
}

export default Home