import CheckSwitch from '@/shared/ui/chekcboxes/chek-switch/check-switch'
import style from './tarif-discount.module.scss'

const TarifDiscount = () => {
   return (
      <div className={style.tarifDiscountWrapper}>
         <div className={style.titleWrapper}>
            <div className={style.title}>
               <h2 className={style.titleInner}>
                  Скидка от базовой цены:
               </h2>
            </div>
            <div className={style.titleImgWrapper}>
               <div className={style.titleImg}>
                  <img src={'/assets/img/alert-orange.svg'} alt="" />
               </div>
               <div className={style.hoverText}>
                  <p className={style.hoverTextInner}>
                     Базовая цена устанавливается в разделе «Доступность и цены».
                     Скидка может устанавливаться за определенные условия и поможет привлечь больше гостей (например, за то что стоимость не возвращается решили сделать скидку 10 %).
                  </p>
               </div>
            </div>
         </div>
         <CheckSwitch />
         <div className={style.inputProcent}>
            <div className={style.input}>
               <input className={style.inputInner} placeholder='10' type="text" />
            </div>
            <div className={style.procent}>
               <p className={style.procentInner}>
                  %
               </p>
            </div>
         </div>
      </div>
   )
}

export default TarifDiscount