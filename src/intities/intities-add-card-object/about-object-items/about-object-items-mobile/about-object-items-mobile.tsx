'use client'

import { useState } from 'react'
import { objectItemsImg } from '../../../../../public/data/data'
import style from './about-object-items-mobile.module.scss'
import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import AboutObjectCheckbox from '@/shared/ui/chekcboxes/about-checkbox/about-checkbox'

const AboutObjectItemsMobile = () => {
    const [selectedItems, setSelectedItems] = useState<number[]>([])

   const handleItemClick = (index: number, e?: React.MouseEvent) => {
    if (e?.target instanceof Element && 
        e.target.closest(`.${style.checkboxContainer}`)) {
      return
    }
    setSelectedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    )
  }

    return (
        <div className={style.aboutObjectItemsWrapper}>
            <div className={style.aboutObjectItems}>
                <div className={style.take}>
                    <p className={style.takeInner}>
                        Выбрано: <span className={style.bold}> 
                            {selectedItems.length} из 9</span>
                    </p>
                </div>
                <div className={style.takeItemsWrapper}>
                    <div className={style.takeItem}>
                        <div className={style.img}>
                            <img className={`${style.imgInner} ${style.modify}`} 
                            src={'/assets/img/mount.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.takeItem}>
                        <div className={style.img}>
                            <img className={style.imgInner} 
                            src={'/assets/img/eat-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.takeItem}>
                        <div className={style.img}>
                            <img className={`${style.imgInner} ${style.modify}`} 
                            src={'/assets/img/yoga-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.takeItem}></div>
                    <div className={style.takeItem}></div>
                    <div className={style.takeItem}></div>
                    <div className={style.takeItem}></div>
                    <div className={style.takeItem}></div>
                    <div className={style.takeItem}></div>
                </div>
            </div>
            <div className={style.objectItemsWrapper}>
                {objectItemsImg.map((item, index) => (
                    <div key={index}  onClick={() => handleItemClick(index)} 
                        className={`
                            ${style.objectItem} 
                            ${selectedItems.includes(index) ? style.active : ''}`}>
                           <div className={style.objectCheck}>
                              <AboutObjectCheckbox 
                                 checked={selectedItems.includes(index)}
                                 onChange={() => handleItemClick(index)} />
                           </div>
                           <div className={style.objectMobile}>
                              <div className={style.imgObject}>
                                 <img className={style.imgObjectInner} src={item.img}
                                 alt="" />
                              </div>
                           <div className={style.text}>
                              <p className={style.textInner}>
                                {item.text}
                              </p>
                           </div>
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutObjectItemsMobile