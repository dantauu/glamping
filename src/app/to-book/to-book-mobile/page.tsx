import Header from "@/intities/intities-home/header/header"
import CardToBook from "@/features/features-to-book/card-to-book/card-to-book"
import PriceToBook from "@/features/features-to-book/price-to-book/price-to-book"
import AuthBlock from "@/intities/intities-to-book/auth-block/auth-block"
import Notify from "@/intities/intities-to-book/notify/notify"
import FormGuest from "@/intities/intities-to-book/form-guest/form-guest"
import FormComment from "@/intities/intities-to-book/form-comment/form-comment"
import PaymentToBook from "@/features/features-to-book/payment-to-book/payment-to-book"
import style from './to-book-mobile.module.scss'
import ArrowMobile from "@/features/features-to-book/arrow-mobile/arrow-mobile"
import ContactsBook from "@/intities/intities-to-book/contacts-book/contacts-book"
import Footer from "@/intities/intities-home/footer/footer"
import ConditionMobile from "@/intities/intities-to-book/condition-mobile/condition-mobile"


const ToBookMobile = () => {
    return (
			<>
				<div className='container'>
					<Header />
				</div>
				<div className={style.border}></div>
				<div className={style.containerToBook}>
					<ArrowMobile />
					<div className={style.wrapper}>
						<CardToBook />
					</div>
					<div className={style.containerMain}>
						<AuthBlock />
						<Notify />
						<FormGuest />
						<ContactsBook />
						<FormComment />
						<PaymentToBook />
						<PriceToBook />
						<ConditionMobile />
					</div>
				</div>
				<Footer />
			</>
		)
}

export default ToBookMobile