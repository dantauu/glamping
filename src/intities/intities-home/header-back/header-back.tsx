import Link from 'next/link'
import style from './header-back.module.scss'
import { headerBackNav } from '../../../../public/data/data'
import HeaderBackInfo from '@/features/features-home/header-back-info/header-back-info'


const HeaderBack = () => {
    return (
        <div className={style.headerBackWrapper}>
            <div className={style.headerBackContainer}>
            <div className={style.headerBackPhotoWrapper}>
                <div className={style.headerBackPhotoText}>
                    <p className={style.headerBackPhoto}>
                        На фото: <Link className={style.headerBackPhotoImg} 
                        href={''}>Глэмпинг "Лагуна"</Link>
                    </p>
                </div>
                <Link href={''} className="">
                    <img className={style.headerBackImg} src={'./assets/img/arrow.svg'} alt="" />
                </Link>
            </div>
            <div className={style.headerBackWhite}>
                <div className={style.headerBackNav}>
                    {headerBackNav.map((item, index) => (
                        <Link href={''} className={`
                        ${style.headerBackNavWrapper} 
                        ${item.id === 1 && `${style.headerBackNavModify}`}`}>
                        <div key={item.id} className=''>
                            <img className={style.headerBackNavImg} 
                                src={item.img} alt="" />
                        </div>
                        <div key={index} className="">
                            <p className={`
                            ${style.headerBackNavText}
                            ${item.id === 1 && `${style.headerBackModifyColor}`}`}>
                                {item.text}
                            </p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            <HeaderBackInfo />
        </div>
    </div>
    )
}

export default HeaderBack