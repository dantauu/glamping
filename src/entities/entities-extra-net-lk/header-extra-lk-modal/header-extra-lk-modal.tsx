'use client'

import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import HeaderExtraLkModalMobile from './header-extra-lk-modal-mobile/header-extra-lk-modal-mobile'
import style from './header-extra-lk-modal.module.scss'

const HeaderExtraLkModal = ({ setShowModal }: any) => {
   const isMobile = useMediaQuery('(max-width: 1070px)')
   return (
      <>
      {isMobile ? <HeaderExtraLkModalMobile setShowModal = {setShowModal} /> : (
         <div className={style.modalHeaderLkWrapper}>
         <div className={style.itemModal}>
            <p className={style.itemModalInner}>
               Мои объекты
            </p>
         </div>
         <Link href={'/personal-account-lk/profile'} className={style.itemModal}>
            <p className={style.itemModalInner}>
               Менеджер каналов
            </p>
         </Link>
         <div className={style.itemModal}>
            <p className={style.itemModalInner}>
               Отзывы
            </p>
         </div>
         <Link onClick={() => setShowModal(false)} href={'/extra-net-lk/profile'} className={style.itemModal}>
            <p className={style.itemModalInner}>
               Настроки профиля
            </p>
         </Link>
         <div className={style.itemModal}>
            <p className={`${style.itemModalInner} ${style.modify}`}>
               Выйти из аккаунта
            </p>
         </div>
      </div>
      )}
      </>
   )
}

export default HeaderExtraLkModal