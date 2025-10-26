'use client'

import { useState } from 'react'
import { cardSizeItems } from '../../../../public/data/data'
import style from './cards.module.scss'

const Cards = () => {
     const [selected, setSelected] = useState<number | null>(null)
    return (
        <div className={style.cardsWrapper}>
            <div className={style.title}>
                <h2 className={style.titleInner}>
                    Тип размещения*
                </h2>
            </div>
            <div className={style.wrapperCards}>
                {cardSizeItems.map((item, index) => (
                    <div key={index} className={style.itemCard}>
                        <div onClick={() => setSelected(prev => prev === 
                        index ? null : index)} className={style.img}>
                            <img className={style.mainImg} src={item.img} alt="" />
                            {selected === index && (
                            <div className={style.checkMarkWrapper}>
                                <div className={style.checkMark}>
                                    <img className={style.checkMarkInner}
                                    src={'/assets/img/check-mark.svg'} alt="" />
                                </div>
                            </div>
                        )}
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
    )
}

export default Cards