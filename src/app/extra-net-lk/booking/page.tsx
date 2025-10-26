import BookingButtons from "@/entities/entities-extra-net-lk/booking/booking-buttons/booking-buttons"
import BookingTable from "@/entities/entities-extra-net-lk/booking/booking-table/booking-table"
import BookingTitle from "@/entities/entities-extra-net-lk/booking/booking-title/booking-title"


const BookingPage = () => {
   return (
      <>
         <BookingTitle />
         <BookingButtons />
         <BookingTable />
      </>
   )
}

export default BookingPage