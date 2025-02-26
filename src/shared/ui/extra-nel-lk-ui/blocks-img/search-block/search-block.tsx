import style from './search-block.module.scss'

const SearchBlock = () => {
   return (
      <div className={style.searchBlockWrapper}>
         <div className={style.img}>
            <img src={'/assets/img/search-green.svg'} alt="" />
         </div>
         <div className={style.input}>
            <input className={style.inputInner} placeholder='Поиск' type="text" />
         </div>
      </div>
   )
}

export default SearchBlock