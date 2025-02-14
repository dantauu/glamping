import Header from "@/intities/intities-home/header/header"
import style from './card-object.module.scss'
import NavCardObject from "@/features/features-card-object/nav-card-object/nav-card-object"
import TitleGlamping from "@/intities/intities-card-object/title-glamping/title-glamping"
import CardImages from "@/intities/intities-card-object/card-images/card-images"
import Comfort from "@/intities/intities-card-object/comfort/comfort"
import HavePlace from "@/features/features-card-object/have-place/have-place"
import SearchResult from "@/intities/intities-card-object/search-result/search-result"
import FullInformation from "@/intities/intities-card-object/full-information/full-information"
import RenderComfort from "@/intities/intities-card-object/render-comfort/render-comfort"
import MapObject from "@/features/features-card-object/map-object/map-object"
import ReviewsRaiting from "@/features/features-card-object/reviews-raiting/reviews-raiting"
import GuestImgs from "@/intities/intities-card-object/guest-imgs/guest-imgs"
import ReviewsCardComp from "@/features/features-card-object/reviews-card-comp/reviews-card-comp"
import SliderCardObject from "@/intities/intities-card-object/slider-card-object/slider-card-object"
import Footer from "@/intities/intities-home/footer/footer"
import { RenderComfortProvider } from "@/providers/render-comfort-context/render-comfort-context"


const CardObject = () => {
    return (
			<>
				<div className='container'>
					<RenderComfortProvider>
						<Header />
						<div className={style.border}></div>
						<NavCardObject />
						<TitleGlamping />
						<CardImages />
						<Comfort />
						<HavePlace />
						<SearchResult />
						<FullInformation />
						<RenderComfort />
						<MapObject />
						<ReviewsRaiting />
						<GuestImgs />
						<ReviewsCardComp />
						<SliderCardObject />
					</RenderComfortProvider>
				</div>
				<Footer />
			</>
		)
}

export default CardObject