'use client'

import { useState } from 'react'
import style from './count-item.module.scss'

const CountItem = () => {
    const [count, setCount] = useState<number>(1)
    const handleIncrement = () => {
        setCount(prev => prev +1)
    }
    const handleDecrement = () => {
        if (count > 1) {
            setCount(prev => prev -1)
        }
    }
    return (
        <div className={style.countItemWrapper}>
            <div onClick={() => handleDecrement()} className={style.minus}>
                <img src={'/assets/img/minus.svg'} alt="" />
            </div>
            <div className={style.count}>
                <p className={style.countInner}>
                    {count}
                </p>
            </div>
            <div onClick={() => handleIncrement()} className={style.plus}>
                <img src={'/assets/img/plus-green.svg'} alt="" />
            </div>
        </div>
    )
}

export default CountItem