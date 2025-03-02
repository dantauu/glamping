import Link from 'next/link'
import style from './arrow-mobile.module.scss'

const ArrowMobile = () => {
   return (
      <div className={style.arrowMobileWrapper}>
         <Link href={'/card-object'} className={style.arrow}>
            <img src={'/assets/img/arrow-slide.svg'} alt="" />
         </Link>
         <div className={style.text}>
            <p className={style.textInner}>
               Бронирование
            </p>
         </div>
      </div>
   )
}

export default ArrowMobile