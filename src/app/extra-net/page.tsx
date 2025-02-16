import AdvantagesEmployee from "@/intities/intities-extra-net/advantages-employee/advantages-employee"
import GlampingServices from "@/intities/intities-extra-net/glamping-services/glamping-services"
import HeaderExtra from "@/intities/intities-extra-net/header-extra/header-extra"



const ExtraNet = () => {
    return (
        <div className="container">
            <HeaderExtra />
            <GlampingServices />
            <AdvantagesEmployee />
        </div>
    )
}

export default ExtraNet