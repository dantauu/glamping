import AdvantagesEmployee from "@/intities/intities-extra-net/advantages-employee/advantages-employee"
import CanRegister from "@/intities/intities-extra-net/can-register/can-register"
import ChannelManager from "@/intities/intities-extra-net/channel-manager/channel-manager"
import GlampingServices from "@/intities/intities-extra-net/glamping-services/glamping-services"
import HeaderExtra from "@/intities/intities-extra-net/header-extra/header-extra"
import OftenQuestions from "@/intities/intities-extra-net/often-questions/often-questions"
import TakeMoney from "@/intities/intities-extra-net/take-money/take-money"
import ThreeSteps from "@/intities/intities-extra-net/three-steps/three-steps"
import Footer from "@/intities/intities-home/footer/footer"



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