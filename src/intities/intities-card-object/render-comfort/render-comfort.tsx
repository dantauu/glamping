'use client'

import { useState } from 'react'
import InComplex from './im-complex/in-complex'
import style from './render-comfort.module.scss'

const RenderComfort = () => {
    const [active, setActive] = useState('В комплексе')
    return (
        <div className={style.renderComfortWrapper}>
            <div className={style.renderComfortTitle}>
                <h1 className={style.renderComfortTitleInner}>
                    Удобства и услуги
                </h1>
            </div>
            <div className={style.wrapperButtons}>
                <div className={style.buttons}>
                <div className="">
                    <button onClick={() => setActive('В комплексе')} 
                    className={`${style.buttonComplex} 
                        ${active ===  'В комплексе' && style.active}`}>
                        В комплексе
                    </button>
                </div>
                <div className="">
                    <button onClick={() => setActive('В домах')} 
                        className={`${style.buttonHome} 
                            ${active === 'В домах' && style.activeHome}`}>
                        В домах
                    </button>
                </div>
                </div>
            </div>
            <InComplex />
        </div>
    )
}

export default RenderComfort