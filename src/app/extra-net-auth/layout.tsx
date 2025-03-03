'use client'

import HeaderExtraAuth from '@/shared/ui/extra-net-ui/header-extra-auth/header-extra-auth'
import style from './layout.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function ExtraNetAuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const isMobile = useMediaQuery('(max-width: 1100px)')
	return (
		<div className='container'>
			{!isMobile && <HeaderExtraAuth />}
			<div className={style.backWrapper}>
				<div className={style.wrapper}>
					{children}
				</div>
			</div>
		</div>
	)
}
