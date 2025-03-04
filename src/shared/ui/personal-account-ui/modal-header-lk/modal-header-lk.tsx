import Link from 'next/link'
import style from './modal-header-lk.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import ModalHeaderLkMobile from './modal-header-lk-mobile/modal-header-lk-mobile'

const ModalHeaderLk = ({ setShowModal }: any) => {
   const isMobile = useMediaQuery('(max-width: 795px)')
   return (
      <>
      {isMobile ? <ModalHeaderLkMobile setShowModal = {setShowModal} /> : (
         <div className={style.modalHeaderLkWrapper}>
         <div className={style.itemModal}>
            <p className={style.itemModalInner}>
               Мои бронирования
            </p>
         </div>
         <Link href={'/personal-account-lk/profile'} className={style.itemModal}>
            <p className={style.itemModalInner}>
               Настроки профиля
            </p>
         </Link>
         <div className={style.itemModal}>
            <p className={style.itemModalInner}>
               Выйти из аккаунта
            </p>
         </div>
      </div>
      )}
      </>
   )
}

export default ModalHeaderLk