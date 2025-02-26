import style from './arrow-block-icon.module.scss'

const ArrowBlockIcon = ({ text }: { text: string }) => {
   return (
      <div className={style.arrowBlockWrapper}>
         <div className={style.text}>
            <p className={style.textInner}>
               {text}
            </p>
         </div>
         <div className={style.img}>
            <img src={'/assets/img/iconArrow.svg'} alt="" />
         </div>
      </div>
   )
}

export default ArrowBlockIcon