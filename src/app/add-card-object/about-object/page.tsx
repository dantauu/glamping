'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery"
import AboutObjectItems from "@/intities/intities-add-card-object/about-object-items/about-object-items"
import AboutObjectTitle from "@/intities/intities-add-card-object/about-object-title/about-object-title"


const AboutObjectPage = () => {
	const isMobile = useMediaQuery('(max-width: 725px)')
    return (
			<>
			{!isMobile && <AboutObjectTitle /> }
				<AboutObjectItems />
			</>
		)
}

export default AboutObjectPage