'use client'

import HeaderAboutCard from "@/intities/intities-extra-net-lk/header-about-card/header-about-card"
import HeaderExtraLk from "@/intities/intities-extra-net-lk/header-extra-lk/header-extra-lk"
import style from './layout.module.scss'
import PanelExtraMobile from "@/features/features-extra-net-lk/panel-extra-mobile/panel-extra-mobile"
import { useMediaQuery } from "@/hooks/useMediaQuery"


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const isMobile = useMediaQuery('(max-width: 1070px)')
	return (
		<div className='container'>
			<div className={style.panelWrapper}>
			<div className={style.wrapper}>
				<HeaderExtraLk />
            	<HeaderAboutCard />
			</div>
			<div className=''>
				{children}
			</div>
			{isMobile && (
				<PanelExtraMobile />
			)}
			</div>
		</div>
	)
}
