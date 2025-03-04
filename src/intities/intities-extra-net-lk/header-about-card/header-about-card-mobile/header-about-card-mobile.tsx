import Link from 'next/link'
import IdButton from '../../id-button/id-button'
import style from './header-about-card-mobile.module.scss'

const HeaderAboutCardMobile = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.headerAboutCardWrapper}>
            <Link href={'/extra-net-lk/my-object'} className={style.arrow}>
               <img src={'/assets/img/arrow-slide.svg'} alt="" />
            </Link>
            <div className={style.id}>
               <IdButton />
            </div>
         </div>
         <Link href={'/extra-net-about-card-information/channel-manager'} className={style.button}>
            <button className={style.buttonInner}>
               Интеграция с менеджером каналов
            </button>
         </Link>
      </div>
   )
}

export default HeaderAboutCardMobile