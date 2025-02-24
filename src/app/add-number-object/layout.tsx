'use client'

import HeaderExtraLk from "@/intities/intities-extra-net-lk/header-extra-lk/header-extra-lk"
import ButtonsAddNumber from "@/intities/intities-extra-net-lk/buttons-add-number/buttons-add-number"
import ProgressBarAddNumber from "@/shared/ui/extra-nel-lk-ui/progress-bar-add-number/progress-bar-add-number"
import style from './layout.module.scss'


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<div className='container'>
				<HeaderExtraLk />
			</div>
            <div className={style.containerContent}>
				{children}
			</div>
			<div className='container'>
                <ProgressBarAddNumber />
				<ButtonsAddNumber />
			</div>
		</>
	)
}
