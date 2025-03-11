import InputObject from '@/shared/ui/add-card-object-ui/input-object/input-object'
import style from './contacts-bufer.module.scss'

const ContactsBufer = () => {
   return (
      <div className={style.contactsBuferWrapper}>
         <div className={style.title}>
            <h2 className={style.titleInner}>
               Контактные данные для обмена документами
            </h2>
         </div>
         <InputObject wrapper={style.mobile} text='E-mail' />
      </div>
   )
}

export default ContactsBufer