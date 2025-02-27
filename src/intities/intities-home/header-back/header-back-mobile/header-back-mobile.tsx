import Link from 'next/link'
import { headerBackNav } from '../../../../../public/data/data'
import style from './header-back-mobile.module.scss'

const HeaderBackMobile = () => {
   return (
      <div className={style.headerBackNav}>
                    {headerBackNav.map((item, index) => (
                        <Link key={index} href={''} className={`
                        ${style.headerBackNavWrapper} 
                        ${item.id === 1 && `${style.headerBackNavModify}`}`}>
                        <div key={item.id} className={style.headerBackNavImg}>
                            <img className={style.headerBackNavImgInner} 
                                src={item.img} alt='' />
                        </div>
                        <div className={style.headerBackNavText}>
                            <p className={style.headerBackNavTextInner}>
                                {item.text}
                            </p>
                        </div>
                        </Link>
                    ))}
                </div>
   )
}

export default HeaderBackMobile