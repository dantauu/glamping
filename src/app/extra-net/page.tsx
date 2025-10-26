import AdvantagesEmployee from "@/entities/entities-extra-net/advantages-employee/advantages-employee"
import CanRegister from "@/entities/entities-extra-net/can-register/can-register"
import ChannelManager from "@/entities/entities-extra-net/channel-manager/channel-manager"
import GlampingServices from "@/entities/entities-extra-net/glamping-services/glamping-services"
import HeaderExtra from "@/entities/entities-extra-net/header-extra/header-extra"
import OftenQuestions from "@/entities/entities-extra-net/often-questions/often-questions"
import TakeMoney from "@/entities/entities-extra-net/take-money/take-money"
import ThreeSteps from "@/entities/entities-extra-net/three-steps/three-steps"
import Footer from "@/entities/entities-home/footer/footer"



const ExtraNet = () => {
    return (
			<>
				<div className='container'>
					<HeaderExtra />
					<GlampingServices />
					<AdvantagesEmployee />
					<CanRegister />
					<ChannelManager />
					<ThreeSteps />
					<TakeMoney />
					<OftenQuestions />
				</div>
				<Footer />
			</>
		)
}

export default ExtraNet