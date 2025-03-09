import style from './arrow-block-icon.module.scss'

const ArrowBlockIcon = ({ text, classText, wrapperClassIcon }: 
   { text: string, classText?: string, wrapperClassIcon?: string }) => {
   return (
      <div className={`${style.arrowBlockWrapper} ${wrapperClassIcon}`}>
         <div className={style.text}>
            <p className={`${style.textInner} ${classText}`}>
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