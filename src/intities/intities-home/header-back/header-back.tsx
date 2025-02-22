import Link from 'next/link'
import style from './header-back.module.scss'
import { headerBackNav } from '../../../../public/data/data'
import HeaderBackInfo from '@/features/features-home/header-back-info/header-back-info'


const HeaderBack = () => {
    return (
        <div className={style.headerBackWrapper}>
            <div className={style.headerBackContainer}>
            <Link href={'#!'} className={style.headerBackPhotoWrapper}>
                <div className={style.headerBackPhotoText}>
                    <p className={style.headerBackPhoto}>
                        На фото:<span className={style.headerBackPhotoSpan}>
                        Глэмпинг &quot;Лагуна&quot;</span>
                    </p>
                </div>
                <div className={style.arrow}>
                    <img className={style.headerBackImg} src={'./assets/img/arrow.svg'} alt='' />
                </div>
            </Link>
            <div className={style.headerBackWhite}>
                <div className={style.headerBackNav}>
                    {headerBackNav.map((item, index) => (
                        <Link key={index} href={''} className={`
                        ${style.headerBackNavWrapper} 
                        ${item.id === 1 && `${style.headerBackNavModify}`}`}>
                        <div key={item.id} className=''>
                            <img className={style.headerBackNavImg} 
                                src={item.img} alt='' />
                        </div>
                        <div className=''>
                            <p className={`
                            ${style.headerBackNavText}
                            ${item.id === 1 && `${style.headerBackModifyColor}`}`}>
                                {item.text}
                            </p>
                        </div>
                        </Link>
                    ))}
                    <div className={style.borderRight}>
                        <img src={'/assets/img/radius-right.svg'} alt="" />
                    </div>
                    <div className={style.borderLeft}>
                        <img src={'/assets/img/radius-left.svg'} alt="" />
                    </div>
                </div>
            </div>
            <HeaderBackInfo />
        </div>
    </div>
    )
}

export default HeaderBack