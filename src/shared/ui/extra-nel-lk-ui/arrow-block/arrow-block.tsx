import style from './arrow-block.module.scss'

const ArrowBlock = ({ textTop, text }: {textTop?: string, text: string }) => {
   return (
      <div className={style.wrapper}>
         <div className={style.left}>
            <div className={style.textTop}>
               <p className={style.textTopInner}>
                  {textTop}
               </p>
            </div>
            <div className={style.text}>
               <p className={style.text}>
                  {text}
               </p>
            </div>
         </div>
         <div className={style.right}>
            <img src={'/assets/img/iconArrow.svg'} alt="" />
         </div>
      </div>
   )
}

export default ArrowBlock