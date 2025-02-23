import HeaderAboutCard from "@/intities/intities-extra-net-lk/header-about-card/header-about-card"
import HeaderExtraLk from "@/intities/intities-extra-net-lk/header-extra-lk/header-extra-lk"
import style from './layout.module.scss'


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='container'>
			<div className={style.wrapper}>
				<HeaderExtraLk />
            	<HeaderAboutCard />
			</div>
			<div className=''>
				{children}
			</div>
		</div>
	)
}
