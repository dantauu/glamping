import style from './height-input.module.scss'

const HeightInput = ({ title }: { title: string }) => {
   return (
      <div className={style.wrapper}>
         <div className={style.title}>
            <p className={style.titleInner}>
               {title}
            </p>
         </div>
         <div className={style.input}>
            <input className={style.inputInner} type="text" />
         </div>
      </div>
   )
}

export default HeightInput