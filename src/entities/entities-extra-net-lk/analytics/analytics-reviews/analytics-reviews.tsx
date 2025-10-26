import style from './analytics-reviews.module.scss'

const items = [
   {
      titleImg: '/assets/img/green-star.svg',
      title: 6,
      description: 'Положительные (7-10 оценка)'
   },
   {
      titleImg: '/assets/img/yellow-star.svg',
      title: 0,
      description: 'Средние (5-6 оценка)'
   },
   {
      titleImg: '/assets/img/red-star.svg',
      title: 1,
      description: 'Отрицательные (1-4 оценка)'
   },
]

const AnalyticsReviews = () => {
   return (
      <div className={style.analyticsReviewsWrapper}>
         <div className={style.title}>
            <h1 className={style.titleInner}>
               Отзывы
            </h1>
         </div>
         <div className={style.mainWrapperCard}>
            <div className={style.wrapperCard}>
               <div className={style.leftBlock}>
                  <p className={style.leftBlockInner}>
                     9,8
                  </p>
               </div>
               <div className={style.rightText}>
                  <div className={style.rightTextUp}>
                     <p className={style.rightTextUpInner}>
                        Превосходно
                     </p>
                  </div>
                  <div className={style.rightTextBottom}>
                     <p className={style.rightTextBottomInner}>
                        7 отзывов
                     </p>
                  </div>
               </div>
            </div>
            <div className={style.moreCards}>
               {items.map((item, index) => (
                  <div className={style.itemCard}>
                     <div className={style.itemCardUp}>
                        <div className={style.itemImg}>
                           <img src={item.titleImg} alt="" />
                        </div>
                        <div className={style.titleText}>
                           <p className={style.titleTextInner}>
                              {item.title}
                           </p>
                        </div>
                     </div>
                     <div className={style.itemCardBottom}>
                        <p className={style.itemCardBottomInner}>
                           {item.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default AnalyticsReviews