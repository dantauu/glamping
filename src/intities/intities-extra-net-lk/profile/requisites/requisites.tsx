import InputObject from "@/shared/ui/add-card-object-ui/input-object/input-object"
import style from './requisites.module.scss'
import ArrowBlockIcon from "@/shared/ui/extra-nel-lk-ui/blocks-img/arrow-block-icon/arrow-block-icon"
import ArrowBlock from "@/shared/ui/extra-nel-lk-ui/arrow-block/arrow-block"


const Requisites = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.title}>
            <h2 className={style.titleInner}>
               Реквизиты организации
            </h2>
         </div>
         <div className={style.inputs}>
            <InputObject text="ИНН" />
            <InputObject text="Полное наименование" wrapper={style.moreWidth} />
            <div className={style.wrapperInput}>
               <InputObject text="ОГРН" />
               <InputObject text="КПП" />
            </div>
            <InputObject text="Юридический адрес" wrapper={style.moreWidth} />
            <ArrowBlock textTop="Тип налогооблажения" text="ОСН 10% НДС" wrapperClass={style.width}  />
         </div>
      </div>
   )
}

export default Requisites