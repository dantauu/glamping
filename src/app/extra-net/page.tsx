import AdvantagesEmployee from "@/intities/intities-extra-net/advantages-employee/advantages-employee"
import CanRegister from "@/intities/intities-extra-net/can-register/can-register"
import GlampingServices from "@/intities/intities-extra-net/glamping-services/glamping-services"
import HeaderExtra from "@/intities/intities-extra-net/header-extra/header-extra"



const ExtraNet = () => {
    return (
        <div className="container">
            <HeaderExtra />
            <GlampingServices />
            <AdvantagesEmployee />
            <CanRegister />
        </div>
    )
}

export default ExtraNet