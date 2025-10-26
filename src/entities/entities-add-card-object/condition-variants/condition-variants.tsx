'use client'

import { useState } from 'react';
import style from './condition-variants.module.scss'

const ConditionVariants = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <div className={style.more}>
                <p className={style.moreText}>
                    2. Варианты размещения
                </p>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Укажите сколько домов/ номеров доступно для бронирования
                </p>
            </div>
            <div className={style.moreInpuWrapper}>
                <div className={style.inputDescription}>
                <div className={style.inputWrapper}>
                    <input 
                        className={style.inputDescriptionInner}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text" 
                    />
                    {!value && (
                        <div className={style.customPlaceholderWrapper}>
                            <p className={style.customPlaceholder}>
                            {`Например: 3 Комфортных дома с панорамным видом на хвойный лес; 6 летних глэмпов на берегу озера.`.split('\n').map((line, index) => (
                                <span key={index}>{line}</span>
                            ))}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            </div>
            </>
    )
}

export default ConditionVariants