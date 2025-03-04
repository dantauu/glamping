import Link from 'next/link'
import style from './modal-header-lk-mobile.module.scss'

const ModalHeaderLkMobile = ({ setShowModal }: any) => {
   return (
      <div className={style.modalHeaderLkWrapperBack}>
         <div className={style.modalHeaderLkWrapper}>
            <div className={style.avatar}>
               <div className={style.avatartext}>
                  <p className={style.avatarTextInner}>
                     ТА
                  </p>
               </div>
               <div className={style.number}>
                  <p className={style.numberInner}>
                     +7 909 999 99 99
                  </p>
               </div>
            </div>
            <Link href={'/personal-account-lk/home'} 
               onClick={() => setShowModal(false)} className={style.text}>
               <p className={style.textInner}>
                  Бронирования
               </p>
            </Link>
            <Link href={'/personal-account-lk/reviews'} 
            onClick={() => setShowModal(false)} className={style.text}>
               <p className={style.textInner}>
                  Отзывы
               </p>
            </Link>
            <div className={style.textWrapper}>
               <div className={style.img}>
                  <img src={'/assets/img/heart.svg'} alt="" />
               </div>
               <div className={style.text}>
                  <p className={style.textInner}>
                     Избранное
                  </p>
               </div>
            </div>
            <div className={style.notifyWrapper}>
               <div className={style.text}>
                  <p className={style.textInner}>
                     Уведомления
                  </p>
               </div>
               <div className={style.count}>
                  <p className={style.countInner}>
                     0
                  </p>
               </div>
            </div>
            <Link href={'/personal-account-lk/profile'} 
              onClick={() => setShowModal(false)} className={style.settingsWrapper}>
               <div className={style.text}>
                  <p className={style.textInner}>
                     Настроки профиля
                  </p>
               </div>
            </Link>
            <div className={style.leaveWrapper}>
               <div className={style.leaveIcon}>
                  <img src={'/assets/img/export.svg'} alt="" />
               </div>
               <div className={style.leaveText}>
                  <p className={style.leaveTextInner}>
                     Выйти из аккаунта
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ModalHeaderLkMobile