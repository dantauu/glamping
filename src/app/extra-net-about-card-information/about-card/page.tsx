import AboutComfort from "@/intities/intities-extra-net-lk/about-comfort/about-comfort"
import AboutFullInformation from "@/intities/intities-extra-net-lk/about-full-information/about-full-information"
import AboutPhotoObject from "@/intities/intities-extra-net-lk/about-photo-object/about-photo-object"
import CardExtra from "@/intities/intities-extra-net-lk/card-extra/card-extra"
import IdButton from "@/intities/intities-extra-net-lk/id-button/id-button"


const AboutCard = () => {
    return (
        <div className="">
            <IdButton />
            <CardExtra />
            <AboutComfort />
            <AboutFullInformation />
            <AboutPhotoObject />
        </div>
    )
}

export default AboutCard