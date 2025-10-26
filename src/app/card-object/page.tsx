import Header from "@/entities/entities-home/header/header"
import style from './card-object.module.scss'
import NavCardObject from "@/features/features-card-object/nav-card-object/nav-card-object"
import TitleGlamping from "@/entities/entities-card-object/title-glamping/title-glamping"
import CardImages from "@/entities/entities-card-object/card-images/card-images"
import Comfort from "@/entities/entities-card-object/comfort/comfort"
import HavePlace from "@/features/features-card-object/have-place/have-place"
import SearchResult from "@/entities/entities-card-object/search-result/search-result"
import FullInformation from "@/entities/entities-card-object/full-information/full-information"
import RenderComfort from "@/entities/entities-card-object/render-comfort/render-comfort"
import MapObject from "@/features/features-card-object/map-object/map-object"
import ReviewsRaiting from "@/features/features-card-object/reviews-raiting/reviews-raiting"
import GuestImgs from "@/entities/entities-card-object/guest-imgs/guest-imgs"
import ReviewsCardComp from "@/features/features-card-object/reviews-card-comp/reviews-card-comp"
import SliderCardObject from "@/entities/entities-card-object/slider-card-object/slider-card-object"
import Footer from "@/entities/entities-home/footer/footer"
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
						<div className={style.wrapper}>
							<ReviewsRaiting />
							<GuestImgs />
							<ReviewsCardComp />
						</div>
						<SliderCardObject />
					</RenderComfortProvider>
				</div>
				<Footer />
			</>
		)
}

export default CardObject