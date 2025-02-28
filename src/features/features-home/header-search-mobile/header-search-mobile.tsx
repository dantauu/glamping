import style from './header-search-mobile.module.scss'

const popularItems = [
    { text: 'Москва', description: 'Россия'},
    { text: 'Санкт-Петербург', description: 'Россия'},
    { text: 'Екатеринбург', description: 'Свердловская область'},
    { text: 'Сочи', description: 'Краснодарский край'},
    { text: 'Анапа', description: 'Краснодарский край'}
]

const HeaderSearchMobile = ({ setSearchMobile }: any) => {
   return (
      <div className={style.headerSearchMobileWrapper}>
         <div className={style.wrapper}>
            <div className={style.titleWrapper}>
               <div onClick={() => setSearchMobile(false)} className={style.arrow}>
                  <img src={'/assets/img/arrow-slide.svg'} alt="" />
               </div>
               <div className={style.title}>
                  <h2 className={style.titleInner}>
                     Куда вы хотите поехать?
                  </h2>
               </div>
            </div>
            <div className={style.inputWrapper}>
               <div className={style.input}>
                  <input className={style.inputInner} 
                     placeholder='Введите город или название места' type="text" />
               </div>
               <div className={style.imgInput}>
                  <img src={'/assets/img/search-green.svg'} alt="" />
               </div>
            </div>
            <div className={style.popularRoad}>
               <div className={style.popularRoadTitle}>
                  <p className={style.popularRoadTitleInner}>
                     Популярные направления
                  </p>
               </div>
               <div className={style.popularItemsWrapper}>
                  {popularItems.map((item, index) => (
                     <div key={index} className={style.popularItem}>
                        <div className={style.img}>
                           <img className={style.imgInner} src={'/assets/img/glamping-icon.svg'} alt="" />
                        </div>
                        <div className={style.textWrapper}>
                           <div className={style.text}>
                              <p className={style.textInner}>
                                 {item.text}
                              </p>
                           </div>
                           <div className={style.description}>
                              <p className={style.descriptionInner}>
                                 {item.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderSearchMobile