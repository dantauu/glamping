'use client'

import { useState } from 'react';
import style from './full-information.module.scss'

const FullInformation = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <div className={style.more}>
                <p className={style.moreText}>
                    3. Общая информация об объекте
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
                            {`Опишите ваш глэмпинг/ эко-отель`.split('\n').map((line, index) => (
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

export default FullInformation