import BuyPoint from "@/intities/intities-add-card-object/about-object-check/buy-point/buy-point"
import Cyrcle from "@/intities/intities-add-card-object/about-object-check/cyrcle/cyrcle"
import Eat from "@/intities/intities-add-card-object/about-object-check/eat/eat"
import FunSport from "@/intities/intities-add-card-object/about-object-check/fun-sport/fun-sport"
import Internet from "@/intities/intities-add-card-object/about-object-check/internet/internet"
import Kids from "@/intities/intities-add-card-object/about-object-check/kids/kids"
import More from "@/intities/intities-add-card-object/about-object-check/more/more"
import Territory from "@/intities/intities-add-card-object/about-object-check/territory/territory"


const AboutObjectCheckPage = () => {
    return (
			<>
				<Territory />
				<Eat />
                <FunSport />
				<BuyPoint />
				<Cyrcle />
				<Internet />
				<Kids />
				<More />
			</>
		)
}

export default AboutObjectCheckPage