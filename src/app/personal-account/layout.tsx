'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery"
import Header from "@/shared/ui/personal-account-ui/header/header"

export default function AuthPersonalAccLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const isMobile = useMediaQuery('(max-width: 800px)')
	return (
		<div className='container'>
			{!isMobile && (
            <Header />
			)}
			<div className=''>
				{children}
			</div>
		</div>
	)
}
