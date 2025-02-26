'use client'

import { useState } from 'react'
import { tableDataItems } from '../../../../../public/data/data'
import style from './analytics-table.module.scss'


const numbers = [
   '1',
   '2',
   '3'
]

const AnalyticsTable = () => {
   const [select, setSelect] = useState<string>('1')
   const handleSelect = (item: string) => {
      setSelect(prev => prev === item ? item : item)
   }
   return (
      <div className={style.analyticsTableWRapper}>
         <div className={style.title}>
            <h2 className={style.titleInner}>
               Количество бронирований по номерам
            </h2>
         </div>
         <div className={style.wrapperTable}>
            {tableDataItems.map((item, index) => (
               <div key={index} className={style.tableItem}>
               <div className={style.tableTitleWrapper}>
                  <div className={style.tableTitle}>
                     <p className={style.tableTitleInner}>
                        {item.titleNumber}
                     </p>
                  </div> 
                  <div className={style.tableTitle}>
                     <p className={`${style.tableTitleInner} ${style.titleBooking}`}>
                        {item.titleBooking}
                     </p>
                  </div> 
                  <div className={style.tableTitle}>
                     <p className={`${style.tableTitleInner} ${style.titlePrice}`}>
                        {item.titlePrice}
                     </p>
                  </div> 
               </div>
               <div className={style.tableRows}>
                  <div className={style.tableRowsItem}>
                     <p className={style.tableNameInnerName}>
                        {item.name}
                     </p>
                  </div>
                  <div className={style.tableRowsItem}>
                     <p className={style.tableNameInnerBooking}>
                        {item.booking}
                     </p>
                  </div>
                  <div className={style.tableRowsItem}>
                     <p className={style.tableNameInnerPrice}>
                        {item.price}
                     </p>
                  </div>
               </div>
               </div>
            ))}
         </div>
         <div className={style.paginationWrapper}>
            {numbers.map((item, index) => (
              <div key={index} onClick={() => handleSelect(item)} 
                  className={`${style.paginationNumber} ${select === item ? 
                     style.select : ''}`}>
                  <p className={`${style.paginationNumberInner} ${select === item ? 
                     style.select : ''}`}>
                     {item}
                  </p>
               </div>
            ))}
            <div className={style.paginationImg}>
               <img src={'/assets/img/arrow-black.svg'} alt="" />
            </div>
         </div>
      </div>
   )
}

export default AnalyticsTable