import ArrowBlock from '@/shared/ui/extra-nel-lk-ui/arrow-block/arrow-block'
import style from './tarif-main.module.scss'

const TarifMain = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.firstItem}>
            <ArrowBlock text='БЕЗВОЗВРАТНЫЙ ТАРИФ' />
            <div className={style.description}>
               <p className={style.descriptionInner}>
                  Вы можете выбрать тариф и отредактировать его под свои условия
               </p>
            </div>
         </div>
         <div className={style.items}>
            <div className={style.inputWrapper}>
               <div className={style.textTop}>
                  <p className={style.textTopInner}>
                     Название вашего тарифа
                  </p>
               </div>
               <div className={style.input}>
                  <input className={style.inputInner} type="text" />
               </div>
            </div>
            <ArrowBlock textTop='Питание' text='Завтрак включён' />
            <ArrowBlock textTop='Политика отмены' text='Стоимость не возвращается' />
            <ArrowBlock textTop='Политика оплаты' text='Предоплата не требуется' />
         </div>
      </div>
   )
}

export default TarifMain