import AboutComfort from "@/intities/intities-extra-net-lk/about-comfort/about-comfort"
import AboutEvents from "@/intities/intities-extra-net-lk/about-events/about-events"
import AboutFullInformation from "@/intities/intities-extra-net-lk/about-full-information/about-full-information"
import AboutPhotoObject from "@/intities/intities-extra-net-lk/about-photo-object/about-photo-object"
import CardExtra from "@/intities/intities-extra-net-lk/card-extra/card-extra"


const AboutCard = () => {
    return (
        <>
            <CardExtra />
            <AboutComfort />
            <AboutFullInformation />
            <AboutPhotoObject />
            <AboutEvents />
        </>
    )
}

export default AboutCard