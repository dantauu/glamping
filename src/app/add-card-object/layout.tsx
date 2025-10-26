'use client'

import ButtonsAddCard from "@/entities/entities-add-card-object/buttons-add-card/buttons-add-card"
import HeaderAddCardObject from "@/entities/entities-add-card-object/header-add-card-object/header-add-card-object"
import ProgressBarAddCard from "@/shared/ui/add-card-object-ui/progress-bar-add-card/progress-bar-add-card"
import style from './layout.module.scss'
import { usePathname } from "next/navigation"
import { STEPS } from "@/config/step"
import { useMediaQuery } from "@/hooks/useMediaQuery"


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()
	const welcomePage = pathname === STEPS[STEPS.length - 1]
	const isMobile = useMediaQuery('(max-width: 635px)')
	return (
		<>
		{!isMobile ? (
			<>
				<div className='container'>
				<HeaderAddCardObject />
					{welcomePage ? (
						children
					): (
						<div className={style.containerWrapper}>
							{children}
						</div>
					)}
				</div>
				{!welcomePage && (
					<>
						<ProgressBarAddCard />
					<div className='container'>
						<ButtonsAddCard />
					</div>
					</>
			)}
			</>
		) : (
			<>
				<div className='container'>
					{!welcomePage && (
						<>
							<HeaderAddCardObject />
							<ProgressBarAddCard />
						</>
					)}
					{welcomePage ? (
						children
					): (
						<div className={style.containerWrapper}>
							{children}
						</div>
					)}
				</div>
				{!welcomePage && (
					<>
					<div className='container'>
						<ButtonsAddCard />
					</div>
					</>
				)}
			</>
		)}
		</>
	)
}
