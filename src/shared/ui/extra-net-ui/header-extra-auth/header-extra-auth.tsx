import Link from 'next/link'
import style from './header-extra-auth.module.scss'

const HeaderExtraAuth = () => {
	return (
		<div className={style.headerWrapper}>
			<div className={style.logo}>
				<div className=''>
					<h1 className={style.logoInner}>GLAMPING RUSSIA</h1>
				</div>
				<div className=''>
					<p className={style.text}>| экстранет</p>
				</div>
			</div>
			<Link href={'/extra-net'} className={style.button}>
				<div className={style.buttonIcon}>
					<img src={'/assets/img/exit.svg'} alt='' />
				</div>
				<div className=''>
					<button className={style.buttonInner}>Вернуться на главную</button>
				</div>
			</Link>
		</div>
	)
}

export default HeaderExtraAuth
