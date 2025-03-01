import style from './comfort-mobile.module.scss'

const ComfortMobile = () => {
   return (
      <div className={style.comfortMobileWrapper}>
         <div className={style.titleComfort}>
            <p className={style.titleComfortInner}>
               Глэмпинг «Лагуна»
            </p>
         </div>
         <div className={style.descriptionComfort}>
            <p className={style.descriptionComfortInner}>
               Краснодарский край, Елизовский район
            </p>
         </div>
         <div className={style.comfortCard}>
            <div className={style.comfortImg}>
               <img src={'/assets/img/map.svg'} alt="" />
            </div>
            <div className={style.comfortImgText}>
               <p className={style.comfortImgTextInner}>
                  Показать на карте
               </p>
            </div>
         </div>
         <div className={style.comfortReviews}>
            <div className={style.reviewsLeft}>
               <div className={style.comfortCount}>
                  <p className={style.comfortCountInner}>
                     9,8
                  </p>
               </div>
               <div className={style.comfortReviewsTitle}>
                  <div className={style.reviewsTitle}>
                     <p className={style.reviewsTitleInner}>
                        Превосходно
                     </p>
                  </div>
                  <div className={style.reviewsDescription}>
                     <p className={style.reviewsDescriptionInner}>
                        27 отзывов
                     </p>
                  </div>
               </div>
            </div>
            <div className={style.reviewsRight}>
               <div className={style.reviewsRightText}>
                  <p className={style.reviewsRightTextInner}>
                     Все отзывы
                  </p>
               </div>
               <div className={style.reviewArrow}>
                  <img className={style.reviewArrowInner}
                     src={'/assets/img/iconArrow.svg'} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default ComfortMobile