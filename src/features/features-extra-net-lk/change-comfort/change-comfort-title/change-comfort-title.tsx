'use client'

import { useState } from 'react'
import { objectItemsImg } from '../../../../../public/data/data'
import style from './change-comfort-title.module.scss'

const ChangeComfortTitle = () => {
    const [selectedItems, setSelectedItems] = useState<number[]>([])

    const handleItemClick = (index: number) => {
    setSelectedItems(prev => prev.includes(index) ? prev.filter(item => item !== index) 
        : [...prev, index] 
    );
  };
    return (
        <div className={style.wrapper}>
            <div className={style.changeComfortTitle}>
                <div className={style.aboutObjectTitleWrapper}>
                    <div className={style.titleWrapper}>
                        <div className={style.title}>
                            <h1 className={style.titleInner}>
                                Удобства и услуги
                            </h1>
                        </div>
                    <div className={style.desscription}>
                        <p className={style.desscriptionInner}>
                            Выберите до 9 услуг, которые есть на территории вашего объекта. Они будут отображаться в карточке объекта на сайте
                        </p>
                    </div>
                    <div className={style.arrow}>
                        <img src={'/assets/img/porabola.svg'} alt="" />
                    </div>
                </div>
                <div className={style.img}>
                    <img src={'/assets/img/card-item.jpg'} alt="" />
                </div>
            </div>
        </div>

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
    </div>
    )
}

export default ChangeComfortTitle