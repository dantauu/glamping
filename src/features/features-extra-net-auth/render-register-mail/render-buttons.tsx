'use client'
import { useState } from 'react'
import style from './render-buttons.module.scss'

const RenderButtons = () => {
    const [active, setActive] = useState<string>('Телефон')
    return (
        <div className={style.wrapperButtons}>
            <div className={style.itemButton}>
                <button onClick={() => setActive('Телефон')} 
                    className={`
                        ${style.itemButtonInner} 
                        ${active === 'Телефон' && style.active}`}>
                    Телефон
                </button>
            </div>
            <div className={style.itemButton}>
                <button onClick={() => setActive('Почта')} 
                    className={`
                    ${style.itemButtonInner}
                    ${active === 'Почта' && style.active}`}>
                    Почта
                </button>
            </div>
        </div>
    )
}

export default RenderButtons