import Header from "@/intities/intities-home/header/header"
import style from './card-object.module.scss'
import NavCardObject from "@/features/features-card-object/nav-card-object/nav-card-object"
import TitleGlamping from "@/intities/intities-card-object/title-glamping/title-glamping"
import CardImages from "@/intities/intities-card-object/card-images/card-images"
import Comfort from "@/intities/intities-card-object/comfort/comfort"
import HavePlace from "@/features/features-card-object/have-place/have-place"

const CardObject = () => {
    return (
			<div className='container'>
				<Header />
				<div className={style.border}></div>
                <NavCardObject />
                <TitleGlamping />
                <CardImages />
                <Comfort />
                <HavePlace />
			</div>
		)
}

export default CardObject