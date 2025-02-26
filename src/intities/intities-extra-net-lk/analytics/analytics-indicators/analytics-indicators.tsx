import style from './analytics-indicators.module.scss'

const items = [
   {
      title: '112',
      description: 'Просмотров объекта на сайте'
   },
   {
      title: '28',
      description: 'Добавлений объекта в Избранное'
   },
   {
      title: '56',
      description: 'Количество забронированных суток'
   },
   {
      title: '1 200 р.',
      description: 'Средняя стоимость суток'
   },
   {
      title: '12',
      description: 'Количество отмененных броней'
   },
]

const AnalyticsIndicators = () => {
   return (
      <div className={style.analyticsIndicatorsWrapper}>
         <div className={style.title}>
            <h1 className={style.titleInner}>
               Основные показатели
            </h1>
         </div>
         <div className={style.cardsWraper}>
            {items.map((item, index) => (
               <div key={index} className={style.itemCard}>
                  <div className={style.titleCard}>
                     <p className={style.titleCardInner}>
                        {item.title}
                     </p>
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

export default AnalyticsIndicators