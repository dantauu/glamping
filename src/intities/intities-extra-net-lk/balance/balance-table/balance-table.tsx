'use client'

import { useState } from 'react'
import style from './balance-table.module.scss'

const numbers = [
   '1',
   '2',
   '3'
]

const BalanceTable = () => {
   const [select, setSelect] = useState<string>('1')
      const handleSelect = (item: string) => {
         setSelect(prev => prev === item ? item : item)
      }
   return (
      <div className={style.balanceTableWrapper}>
         <div className={style.titleWrapper}>
            <div className={style.titleLeft}>
               <div className={style.date}>
                  <p className={style.dateInner}>
                     ДАТА
                  </p>
               </div>
               <div className={style.description}>
                  <p className={style.descriptionInner}>
                     Описание
                  </p>
               </div>
            </div>
            <div className={style.titleRight}>
               <div className={style.price}>
                  <p className={style.priceInner}>
                     ПОЛНАЯ СТОИМОСТЬ, КОТОРУЮ ОПЛАТИЛ ГОСТЬ
                  </p>
               </div>
               <div className={style.fullPrice}>
                  <div className={style.fulPriceText}>
                     <p className={style.fullPriceTextInner}>
                        Сумма
                     </p>
                  </div>
                  <div className={style.fulPriceImg}>
                     <img src={'/assets/img/alert-gray.svg'} alt="" />
                  </div>
               </div>
            </div>
         </div>
         <div className={style.table}>
            <div className={style.tableItem}>
               <div className={style.firstPart}>
                  <div className={style.tableDate}>
                     <p className={style.tableDataInner}>
                        07.08.2024
                     </p>
                  </div>
                  <div className={style.tableDescription}>
                     <p className={style.tableDescriptionInner}>
                        Номер брони <span className={style.border}>45-85612</span> от 25.09.2024 <br /> Получение оплаты за бронирование от покупателя Иванова И.И. (Эко-домик, 2 гостей, 1 ночь)
                     </p>
                  </div>
               </div>
               <div className={style.secondPart}>
                  <div className={style.tablePrice}>
                     <p className={style.tablePriceInner}>
                        5 500 р.
                     </p>
                  </div>
                  <div className={style.fullTablePrice}>
                     <p className={style.fullTablePriceInner}>
                        +5 500 р.
                     </p>
                  </div>
               </div>
            </div>
            <div className={style.exitCard}>
               <div className={style.exitCardDataWrapper}>
                  <div className={style.exitCardData}>
                     <p className={style.exitCardDataInner}>
                        05.08.2024
                     </p>
                  </div>
                  <div className={style.exitCardDataDescription}>
                     <p className={style.exitCardDataDescriptionInner}>
                        Вывод на карту
                     </p>
                  </div>
               </div>
               <div className={style.exitCardPrice}>
                  <p className={style.exitCardPriceInner}>
                     -12 500 р.
                  </p>
               </div>
            </div>
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

export default BalanceTable