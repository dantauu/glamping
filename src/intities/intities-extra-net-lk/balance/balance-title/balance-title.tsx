import style from './balance-title.module.scss'

const BalaneTitle = () => {
   return (
      <div className={style.balanceTitleWrapper}>
         <div className={style.title}>
            <h1 className={style.titleInner}>
               Баланс
            </h1>
         </div>
         <div className={style.blockBalance}>
            <div className={style.blockTitle}>
               <div className={style.titleBalance}>
                  <h1 className={style.titleBalanceInner}>
                     3500 p.
                  </h1>
               </div>
               <div className={style.description}>
                  <p className={style.descriptionInner}>
                     Баланс
                  </p>
               </div>
            </div>
            <div className={style.wrapperButtons}>
               <div className={style.button}>
                  <button className={style.buttonExit}>
                     Вывести деньги
                  </button>
               </div>
               <div className={style.button}>
                  <button className={style.buttonEnter}>
                     Пополнить баланс
                  </button>
               </div>
            </div>
            <div className={style.cyrcle}></div>
            <div className={style.absoluteImgWrapper}>
               <div className={style.absoluteImg}>
                  <img src={'/assets/img/wallet.svg'} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BalaneTitle