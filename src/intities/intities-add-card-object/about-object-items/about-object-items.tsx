'use client'

import { useState } from 'react'
import { objectItemsImg } from '../../../../public/data/data'
import style from './about-object-items.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import AboutObjectItemsMobile from './about-object-items-mobile/about-object-items-mobile'

const AboutObjectItems = () => {
    const isMobile = useMediaQuery('(max-width: 725px)')
    const [selectedItems, setSelectedItems] = useState<number[]>([])

    const handleItemClick = (index: number) => {
    setSelectedItems(prev => prev.includes(index) ? prev.filter(item => item !== index) 
        : [...prev, index] 
    );
  };

    return (
        <>
        {isMobile ? <AboutObjectItemsMobile /> : (
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
                        <div className={style.imgObject}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={style.text}>
                            <p className={style.textInner}>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )}
        </>
    )
}

export default AboutObjectItems