'use client'

import ButtonsAddCard from "@/intities/intities-add-card-object/buttons-add-card/buttons-add-card"
import HeaderAddCardObject from "@/intities/intities-add-card-object/header-add-card-object/header-add-card-object"
import ProgressBarAddCard from "@/shared/ui/add-card-object-ui/progress-bar-add-card/progress-bar-add-card"
import style from './layout.module.scss'
import { usePathname } from "next/navigation"
import { STEPS } from "@/config/step"


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()
	const welcomePage = pathname === STEPS[STEPS.length - 1]
	return (
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
	)
}
