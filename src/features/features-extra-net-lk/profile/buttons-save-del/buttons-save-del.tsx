import style from './buttons-save-del.module.scss'

const ButtonsSaveDel = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.button}>
            <button className={style.buttonSave}>
               Сохранить
            </button>
         </div>
         <div className={style.button}>
            <button className={style.buttonDel}>
               Удалить профиль
            </button>
         </div>
      </div>
   )
}

export default ButtonsSaveDel