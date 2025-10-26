import Link from 'next/link'
import style from './header-extra-lk-modal-mobile.module.scss'

const HeaderExtraLkModalMobile = ({ setShowModal }: any) => {
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
                     Татьяна
                  </p>
               </div>
            </div>
            <Link href={'/extra-net-lk/my-object'} 
               onClick={() => setShowModal(false)} className={style.text}>
               <p className={style.textInner}>
                  Мои объекты
               </p>
            </Link>
            <Link href={'/extra-net-lk/booking'}  onClick={() => setShowModal(false)} className={style.textWrapper}>
               <div className={style.img}>
                  <img src={'/assets/img/input-arrow.svg'} alt="" />
               </div>
               <div className={style.text}>
                  <p className={style.textInner}>
                     Бронирования
                  </p>
               </div>
            </Link>
            <div onClick={() => setShowModal(false)} className={style.text}>
               <p className={style.textInner}>
                  Менеджер каналов
               </p>
            </div>
            <Link href={'/extra-net-lk/analytics'} onClick={() => setShowModal(false)} className={style.text}>
               <p className={style.textInner}>
                  Аналитика
               </p>
            </Link>
            <Link href={'/extra-net-lk/balance'} onClick={() => setShowModal(false)} className={style.text}>
               <p className={style.textInner}>
                  Баланс
               </p>
            </Link>
            <div onClick={() => setShowModal(false)} className={style.text}>
               <p className={style.textInner}>
                  Отзывы
               </p>
            </div>
            <div className={style.notifyWrapper}>
               <div className={style.text}>
                  <p className={style.textInner}>
                     Сообщения
                  </p>
               </div>
               <div className={style.count}>
                  <p className={style.countInner}>
                     0
                  </p>
               </div>
            </div>
            <Link href={'/extra-net-lk/profile'} 
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

export default HeaderExtraLkModalMobile