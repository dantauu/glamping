import BookingButtons from "@/intities/intities-personal-account-lk/buttons/booking-buttons"
import { RenderBookingProvider } from "@/providers/render-booking-context/render-booking-context"


const Home = () => {
    return (
			<div className='container'>
				<RenderBookingProvider>
					<BookingButtons />
				</RenderBookingProvider>
			</div>
		)
}

export default Home