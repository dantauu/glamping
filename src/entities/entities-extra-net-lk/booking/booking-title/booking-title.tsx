import IdButton from '../../id-button/id-button'
import style from './booking-title.module.scss'

const BookingTitle = () => {
   return (
      <div className={style.bookingTitle}>
         <div className={style.titleWrapper}>
            <div className={style.title}>
               <h1 className={style.titleInner}>
                  Бронирования
               </h1>
            </div>
            <div className={style.button}>
               <IdButton />
            </div>
         </div>
         <div className={style.loadNumberBlock}>
            <div className={style.loadNumberTitle}>
               <h2 className={style.loadNumberTitleInner}>
                  Загрузка номеров на сегодня
               </h2>
            </div>
            <div className={style.contentNumberBlock}>
               <div className={style.procent}>
                  <h1 className={style.procentInner}>
                     42 %
                  </h1>
               </div>
               <div className={style.moreContent}>
                  <div className={style.columnLeft}>
                     <div className={style.occupied}>
                        <div className={style.occupiedInner}>
                           <span className={style.bold}>5</span> занято
                        </div>
                     </div>
                     <div className={style.occupiedSum}>
                        <p className={style.occupiedSumInner}>
                           <span className={style.bold}>12</span> всего номеров
                        </p>
                     </div>
                  </div>
                  <div className={style.columnRight}>
                     <div className={style.await}>
                        <div className={style.awaitInner}>
                           <span className={style.green}>2</span> ожидается заселение
                        </div>
                     </div>
                     <div className={style.exit}>
                        <p className={style.exitInner}>
                           <span className={style.red}>1</span> выезд
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BookingTitle