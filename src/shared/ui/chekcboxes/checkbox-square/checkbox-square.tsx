'use client'
import { useState } from 'react'
import style from './checkbox-square.module.scss'

const CheckBoxSquare = () => {
    const [checked, setChecked] = useState(false)
    const handleChecked = () => setChecked(prev => !prev)
    return (
        <label className={style.checkboxContainer}>
            <input className={style.customCheckbox} 
                onChange={handleChecked}
                checked={checked}
                type="checkbox" />
        <span className={style.checkmark}></span>
        </label>

    )
}

export default CheckBoxSquare