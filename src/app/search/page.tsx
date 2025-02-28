'use client'
import Header from "@/intities/intities-home/header/header"
import style from './search.module.scss'
import HeaderSearchInfo from "@/features/features-search/header-search-info/header-search-info"
import NavSearch from "@/features/features-search/nav-search/nav-search"
import Buttons from "@/intities/intities-search/buttons/buttons"
import ReviewsCard from "@/shared/ui/reviews-card/reviews-card"
import Map from "@/features/features-search/map/map"
import Footer from "@/intities/intities-home/footer/footer"
import ModalSearchSet from "@/shared/ui/modal-search-set/modal-search-set"
import { ModalSearchProvider } from "@/providers/modal-search/modal-search"



const Search = () => {
    return (
			<>
				<ModalSearchProvider>
					<div className='container'>
						<Header />
						<div className={style.border}></div>
						<div className={style.nav}>
							<NavSearch />
						</div>
						<div className={style.buttons}>
							<HeaderSearchInfo />
						</div>
						<Buttons />
						<div className={style.mapWrapper}>
							<ReviewsCard />
							<div className={style.map}>
								<Map />
							</div>
						</div>
					</div>
					<ModalSearchSet />
					<Footer />
				</ModalSearchProvider>
			</>
		)
}

export default Search