'use client'

import Header from "@/entities/entities-home/header/header"
import style from './to-book.module.scss'
import NavToBook from "@/features/features-to-book/nav-to-book/nav-to-book"
import CardToBook from "@/features/features-to-book/card-to-book/card-to-book"
import PriceToBook from "@/features/features-to-book/price-to-book/price-to-book"
import AuthBlock from "@/entities/entities-to-book/auth-block/auth-block"
import Notify from "@/entities/entities-to-book/notify/notify"
import FormGuest from "@/entities/entities-to-book/form-guest/form-guest"
import FormComment from "@/entities/entities-to-book/form-comment/form-comment"
import PaymentToBook from "@/features/features-to-book/payment-to-book/payment-to-book"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import ToBookMobile from "./to-book-mobile/page"
import ContactsBook from "@/entities/entities-to-book/contacts-book/contacts-book"
import Footer from "@/entities/entities-home/footer/footer"

const ToBook = () => {
	const isMobile = useMediaQuery('(max-width: 1345px)')
    return (
			<>
			{isMobile ? <ToBookMobile /> : (
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
						<ContactsBook />
						<FormComment />
						<PaymentToBook />
					</div>
				</div>
				<Footer />
				</>
			)}
			</>
		)
}

export default ToBook