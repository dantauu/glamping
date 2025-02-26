'use client'

import { useState } from 'react'
import style from './booking-table.module.scss'

const numbers = [
   '1',
   '2',
   '3'
]

const BookingTable = () => {
   const [select, setSelect] = useState<string>('1')
      const handleSelect = (item: string) => {
         setSelect(prev => prev === item ? item : item)
      }
   return (
      <div className={style.mainWrapper}>
         <div className={style.bookingTableWrapper}>
               <div className={style.text}>
                  <p className={`${style.textInner} ${style.center}`}>
                     дата брони
                  </p>
               </div>
               <div className={style.text}>
                  <p className={`${style.textInner} ${style.pad}`}>
                     гости
                  </p>
               </div>
               <div className={style.text}>
                  <p className={style.textInner}>
                     даты проживания
                  </p>
               </div>
               <div className={style.text}>
                  <p className={`${style.textInner} ${style.center}`}>
                     номер
                  </p>
               </div>
               <div className={style.text}>
                  <p className={`${style.textInner} ${style.padMore}`}>
                     номер брони
                  </p>
               </div>
               <div className={style.text}>
                  <p className={`${style.textInner} ${style.padVeryMore}`}>
                     статус брони
                  </p>
               </div>
               <div className={style.text}>
                  <p className={`${style.textInner} ${style.center}`}>
                     стоимость
                  </p>
               </div>
         </div>
         <div className={style.tablesWrapper}>
         <div className={style.table}>
            <div className={style.tableDate}>
               <p className={style.tableDateInner}>
                  07.08.2024
               </p>
            </div>
            <div className={style.tableGuest}>
               <div className={style.tableGuestName}>
                  <p className={style.tableGuestNameInner}>
                     Иванова Анастасия
                  </p>
               </div>
               <div className={style.tableGuestCount}>
                  <p className={style.tableGuestCountInner}>
                     2 взрослых
                  </p>
               </div>
            </div>
            <div className={style.tableDateLive}>
               <div className={style.tableDateLiveText}>
                  <p className={style.tableDateLiveTextInner}>
                     07.08.2024 - 08.08.2024
                  </p>
               </div>
               <div className={style.tableDateLiveCount}>
                  <p className={style.tableDateLiveCountInner}>
                     1 ночь
                  </p>
               </div>
            </div>
            <div className={style.tableNumber}>
               <p className={style.tableNumberInner}>
                  Эко-домик
               </p>
            </div>
            <div className={style.tableNumberBoolking}>
               <p className={style.tableNumberBoolkingInner}>
                  45-85612
               </p>
            </div>
            <div className={style.tableStatus}>
               <p className={style.tableStatusInner}>
                  Оплачено
               </p>
            </div>
            <div className={style.tablePrice}>
               <p className={style.tablePriceInner}>
                  5 000 р.
               </p>
            </div>
         </div>

         <div className={style.table}>
            <div className={style.tableDate}>
               <p className={style.tableDateInner}>
                  07.08.2024
               </p>
            </div>
            <div className={style.tableGuest}>
               <div className={style.tableGuestName}>
                  <p className={style.tableGuestNameInner}>
                     Иванова Анастасия
                  </p>
               </div>
               <div className={style.tableGuestCount}>
                  <p className={style.tableGuestCountInner}>
                     2 взрослых
                  </p>
               </div>
            </div>
            <div className={style.tableDateLive}>
               <div className={style.tableDateLiveText}>
                  <p className={style.tableDateLiveTextInner}>
                     07.08.2024 - 08.08.2024
                  </p>
               </div>
               <div className={style.tableDateLiveCount}>
                  <p className={style.tableDateLiveCountInner}>
                     2 ночи
                  </p>
               </div>
            </div>
            <div className={style.tableNumber}>
               <p className={style.tableNumberInner}>
                  Эко-домик 2
               </p>
            </div>
            <div className={style.tableNumberBoolking}>
               <p className={style.tableNumberBoolkingInner}>
                  45-85612
               </p>
            </div>
            <div className={style.tableStatusReady}>
               <p className={style.tableStatusReadyInner}>
                  Оплата на месте 
               </p>
            </div>
            <div className={style.tablePrice}>
               <p className={style.tablePriceInner}>
                  5 000 р.
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

export default BookingTable