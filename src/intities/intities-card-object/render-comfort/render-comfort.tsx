'use client'

import { JSX, useState } from 'react'
import InComplex from './in-complex/in-complex'
import style from './render-comfort.module.scss'
import InHome from './in-home/in-home'
import { useRenderComfort } from '@/providers/render-comfort-context/render-comfort-context'

type renderContentProps = { 
    [key: string]: JSX.Element
}

const RenderComfort = () => {
    const [active, setActive] = useState('В комплексе')
    const { render, setRender } = useRenderComfort()
    const renderContent: renderContentProps = {
        'В комплексе': <InComplex />,
        'В домах': <InHome />
    } 
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
                    <button onClick={() => {
                        setActive('В комплексе'),
                        setRender('В комплексе')}} 
                    className={`${style.buttonComplex} 
                        ${active ===  'В комплексе' && style.active}`}>
                        В комплексе
                    </button>
                </div>
                <div className="">
                    <button onClick={() => {
                        setActive('В домах')
                        setRender('В домах')}} 
                        className={`${style.buttonHome} 
                            ${active === 'В домах' && style.activeHome}`}>
                        В домах
                    </button>
                </div>
                </div>
            </div>
            {renderContent[render] || null}
        </div>
    )
}

export default RenderComfort