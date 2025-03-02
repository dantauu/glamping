'use client'
import { useState } from 'react'
import { complexComfortItems } from '../../../../../../public/data/data'
import style from './in-complex-mobile.module.scss'

const InComplexMobile = () => {
  const [openedCategories, setOpenedCategories] = useState<Record<number, boolean>>({})

  const toggleCategory = (id: number) => {
    setOpenedCategories(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className={style.inComplexWrapper}>
      {complexComfortItems.map(category => (
        <div key={category.id} className={style.category}>
          <button 
            className={style.categoryHeader} 
            onClick={() => toggleCategory(category.id)}>
            <div className={style.headerContent}>
              <div className={style.icon}>
                <img src={category.icon} alt="" />
              </div>
              <h3 className={style.titleInner}>{category.title}</h3>
            </div>
            <img src="/assets/img/iconArrow.svg" 
              className={`${style.arrow} ${openedCategories[category.id] ? style.rotated : ''}`}
              alt="toggle"
            />
          </button>
          
          <div className={`${style.content} ${openedCategories[category.id] ? style.open : ''}`}>
            <ul className={style.wrapperText}>
              {category.itemsText.map((item, index) => (
                <li className={style.mainText} key={index}>
                  {typeof item === 'string' ? item : (
                    <>
                      <div className={style.itemName}>{item.name}</div>
                      <div className={style.detailsWrapper}>
                        {item.details && <span className={style.details}>{item.details}</span>}
                        {item.price && <span className={style.price}>{item.price}</span>}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InComplexMobile