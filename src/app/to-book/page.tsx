import Header from "@/intities/intities-home/header/header"
import style from './to-book.module.scss'
import NavToBook from "@/features/features-to-book/nav-to-book/nav-to-book"
import CardToBook from "@/features/features-to-book/card-to-book/card-to-book"
import PriceToBook from "@/features/features-to-book/price-to-book/price-to-book"
import AuthBlock from "@/intities/intities-to-book/auth-block/auth-block"
import Notify from "@/intities/intities-to-book/notify/notify"
import FormGuest from "@/intities/intities-to-book/form-guest/form-guest"
import FormComment from "@/intities/intities-to-book/form-comment/form-comment"
import PaymentToBook from "@/features/features-to-book/payment-to-book/payment-to-book"

const ToBook = () => {
    return (
			<>
				<div className='container'>
					<Header />
				</div>
				<div className={style.border}></div>
				<div className={style.containerToBook}>
					<NavToBook />
					<div className={style.wrapper}>
						<CardToBook />
						<div className={style.fixed}>
							<PriceToBook />
						</div>
					</div>
					<div className={style.containerMain}>
						<AuthBlock />
						<Notify />
						<FormGuest />
						<FormComment />
						<PaymentToBook />
					</div>
				</div>
			</>
		)
}

export default ToBook