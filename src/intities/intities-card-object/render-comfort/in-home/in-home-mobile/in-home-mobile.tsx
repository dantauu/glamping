'use client'
import { useState } from 'react'
import { homeComfortItems } from '../../../../../../public/data/data'
import style from './in-home-mobile.module.scss'

const InHomeMobile = () => {
  const [openedCategories, setOpenedCategories] = useState<Record<number, boolean>>({})

  const toggleCategory = (id: number) => {
    setOpenedCategories(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className={style.inComplexWrapper}>
      {homeComfortItems.map(category => (
        <div key={category.id} className={style.category}>
          <button 
            className={style.categoryHeader} 
            onClick={() => toggleCategory(category.id)}
          >
            <div className={style.headerContent}>
              <div className={style.icon}>
                <img src={category.icon} alt={category.title} />
              </div>
              <h3 className={style.titleInner}>{category.title}</h3>
            </div>
            <img 
              src="/assets/img/iconArrow.svg"
              className={`${style.arrow} ${openedCategories[category.id] ? style.rotated : ''}`}
              alt="toggle"
            />
          </button>
          
          <div className={`${style.content} ${openedCategories[category.id] ? style.open : ''}`}>
            <ul className={style.wrapperText}>
              {category.itemsText.map((item, index) => (
                <li className={style.mainText} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InHomeMobile