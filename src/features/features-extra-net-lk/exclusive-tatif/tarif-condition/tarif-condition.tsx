import HeightInput from '@/shared/ui/extra-nel-lk-ui/height-input/height-input'
import style from './tarif-condition.module.scss'

const TarifCondition = () => {
   return (
      <div className={style.tarifCondirionWrapper}>
         <div className={style.title}>
            <h2 className={style.titleInner}>
               Условия тарифа
            </h2>
         </div>
         <div className={style.items}>
            <HeightInput title='Политика оплаты' />
            <HeightInput title='Отмена при задержке' />
            <HeightInput title='Специальная информация' />
            <HeightInput title='Политика в отношении детей' />
            <HeightInput title='Необходимые документы' />
         </div>
      </div>
   )
}

export default TarifCondition