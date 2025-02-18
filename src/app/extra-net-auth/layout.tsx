import HeaderExtraAuth from '@/shared/ui/extra-net-ui/header-extra-auth/header-extra-auth'
import style from './layout.module.scss'

export default function ExtraNetAuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='container'>
            <HeaderExtraAuth />
			<div className={style.backWrapper}>
				<div className={style.wrapper}>
					{children}
				</div>
			</div>
		</div>
	)
}
