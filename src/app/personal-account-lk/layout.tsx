'use client'

import PanelMobile from "@/features/features-personal-account-lk/panel-mobile/panel-mobile"
import HeaderLk from "@/shared/ui/personal-account-ui/header-lk/header-lk"
import style from "./layout.module.scss"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const isMobile = useMediaQuery('(max-width: 795px)')
	return (
		<div className={style.wrapper}>
			<div className='container'>
            	<HeaderLk />
				<div className=''>
					{children}
				</div>
				{isMobile && (
					<PanelMobile />
				)}
			</div>
		</div>
	)
}
