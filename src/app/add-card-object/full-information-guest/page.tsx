import CountItems from "@/intities/intities-add-card-object/full-information-guest/count-items/count-items"
import SpecificationsParents from "@/intities/intities-add-card-object/full-information-guest/specifications/specification-parents/specification-parents"
import SpecificationsSmoke from "@/intities/intities-add-card-object/full-information-guest/specifications/specification-smoke/specification-smoke"
import SpecificationsEnvironment from "@/intities/intities-add-card-object/full-information-guest/specifications/specifications-environment/specification-environment"
import SpecificationsInternet from "@/intities/intities-add-card-object/full-information-guest/specifications/specifications-internet/specifications-internet"
import SpecificationsSleep from "@/intities/intities-add-card-object/full-information-guest/specifications/specifications-sleep/specifications-sleep"
import TitleFullInformation from "@/intities/intities-add-card-object/full-information-guest/title-full-information/title-full-information"


const FullInformationGustPage = () => {
    return (
        <>
            <TitleFullInformation />
            <CountItems />
            <SpecificationsSleep />
            <SpecificationsInternet />
            <SpecificationsEnvironment />
            <SpecificationsParents />
            <SpecificationsSmoke />
        </>
    )
}

export default FullInformationGustPage