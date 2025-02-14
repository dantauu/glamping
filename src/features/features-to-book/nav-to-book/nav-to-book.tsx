import Link from 'next/link'
import style from './nav-to-book.module.scss'

const NavToBook = () => {
	return (
		<div className={style.navSearchWrapper}>
			<Link href={'/'} className={style.img}>
				<img src={'./assets/img/home.svg'} alt='' />
			</Link>
			<div className=''>
				<p className={style.slash}>/</p>
			</div>
			<Link href={'/search'} className={style.text}>
				<p className={style.textInner}>Результаты поиска</p>
			</Link>
			<div className=''>
				<p className={style.slash}>/</p>
			</div>
			<Link href={'/card-object'} className={style.text}>
				<p className={style.textInnerObject}>Глэмпинг &quot;Лагуна&quot;</p>
			</Link>
            <div className=''>
				<p className={style.slash}>/</p>
			</div>
			<Link href={'#!'} className={style.text}>
				<p className={style.textInnerToBook}>Бронирование</p>
			</Link>
		</div>
	)
}

export default NavToBook
