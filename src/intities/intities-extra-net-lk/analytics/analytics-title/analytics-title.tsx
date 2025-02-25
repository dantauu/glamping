'use client'

import { useState } from 'react'
import IdButton from '../../id-button/id-button'
import style from './analytics-title.module.scss'

const wordsItems = [
   'Месяц',
   'Квартал',
   'Год',
   'Всё время'
]

const cardItems = [
   {
      title: '171 000 р.',
      description: 'Заработано за квартал'
   },
   {
      title: '38',
      description: 'Количество исполненных броней'
   },
   {
      title: '4 500 р.',
      description: 'Средний чек'
   }
]

const AnalyticsTitle = () => {
   const [select, setSelect] = useState<string>('Квартал')
   const handleSelect = (item: string) => {
      setSelect(prev => prev === item ? '' : item)
   }
   return (
      <div className={style.analyticsTitleWrapper}>
         <div className={style.title}>
            <h1 className={style.titleInner}>
               Аналитика продаж
            </h1>
         </div>
         <IdButton />
         <div className={style.wrapperItemsWord}>
            {wordsItems.map((item, index) => (
               <div onClick={() => handleSelect(item)} 
                  key={index} className={`
                     ${style.item} 
                     ${select === item ? style.select : ''}`}>
                  <p className={`
                     ${style.itemInner} 
                     ${select === item ? style.selectInner : ''}`}>
                     {item}
                  </p>
               </div>
            ))}
         </div>
         <div className={style.wrapperCard}>
            {cardItems.map((item, index) => (
               <div key={index} className={style.itemCard}>
                  <div className={style.titleCard}>
                     <h1 className={style.titleCardInner}>
                        {item.title}
                     </h1>
                  </div>
                  <div className={style.descriptionCard}>
                     <p className={style.descriptionCardInner}>
                        {item.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default AnalyticsTitle