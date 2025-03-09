import style from './data-block.module.scss'

const DataBlock = ({ wrapperClass }: { wrapperClass?: string }) => {
   return (
      <div className={`${style.dataBlock} ${wrapperClass}`}>
         <div className={style.text}>
            <p className={style.textInner}>
               Дата/ период
            </p>
         </div>
         <div className={style.img}>
            <img src={'/assets/img/calendar.svg'} alt="" />
         </div>
      </div>
   )
}

export default DataBlock