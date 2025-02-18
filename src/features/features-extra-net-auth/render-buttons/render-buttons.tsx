'use client'

import { useState } from 'react'
import { useRenderNumberMail } from '@/providers/render-number-mail/render-number-mail'
import style from './render-buttons.module.scss'

const RenderButtons= () => {
    const [active, setActive] = useState<string>('Телефон')
    const { setRender } = useRenderNumberMail()
    return (
        <div className={style.wrapperButtons}>
            <div className={style.itemButton}>
                <button onClick={() => {setActive('Телефон'), setRender('Телефон')}}
                    className={`
                        ${style.itemButtonInner} 
                        ${active === 'Телефон' && style.active}`}>
                    Телефон
                </button>
            </div>
            <div className={style.itemButton}>
                <button onClick={() => {setActive('Почта'), setRender('Почта')}}
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