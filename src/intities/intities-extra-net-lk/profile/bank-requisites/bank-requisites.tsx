import ArrowBlock from '@/shared/ui/extra-nel-lk-ui/arrow-block/arrow-block'
import style from './bank-requisites.module.scss'
import InputObject from '@/shared/ui/add-card-object-ui/input-object/input-object'

const BankRequisites = () => {
   return (
      <div className={style.wrapperBankRequisites}>
         <div className={style.title}>
            <h2 className={style.titleInner}>
               Банковские реквизиты
            </h2>
         </div>
         <div className={style.inputs}>
            <ArrowBlock textTop='Тип расёта' text='Расчётный счет' 
               wrapperClass={style.width} />
            <InputObject wrapper={style.mobile} text='БИК' />
         </div>
      </div>
   )
}

export default BankRequisites