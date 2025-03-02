import style from './condition-mobile.module.scss'

const ConditionMobile = () => {
   return (
      <div className={style.conditionMobileWrapper}>
         <div className={style.button}>
            <button className={style.buttonInner}>
               Забронировать
            </button>
         </div>
         <div className={style.conditionTextWrapper}>
            <div className={style.firstText}>
               <p className={style.firstTextInner}>
                  Нажимая «Забронировать», Я принимаю условия <span className={style.border}>договора публичной оферты</span>, Я соглашаюсь с <span className={style.border}>политикой обработки персональных данных, политикой конфиденциальности.</span>
               </p>
            </div>
            <div className={style.nextText}>
               <p className={style.nextTextInner}>
                  Платежи безопасны. Сайт передаёт данные по защищенному соединению SSL, что обеспечивает высокий уровень безопасности. Мы не храним данные ваших банковских карт, поэтому их невозможно похитить. 
               </p>
            </div>
         </div>
      </div>
   )
}

export default ConditionMobile