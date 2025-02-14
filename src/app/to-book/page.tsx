import Header from "@/intities/intities-home/header/header"
import style from './to-book.module.scss'
import NavToBook from "@/features/features-to-book/nav-to-book/nav-to-book"
import CardToBook from "@/features/features-to-book/card-to-book/card-to-book"
import PriceToBook from "@/features/features-to-book/price-to-book/price-to-book"
import AuthBlock from "@/intities/intities-to-book/auth-block/auth-block"

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
						<PriceToBook />
					</div>
                <AuthBlock />
				</div>
			</>
		)
}

export default ToBook