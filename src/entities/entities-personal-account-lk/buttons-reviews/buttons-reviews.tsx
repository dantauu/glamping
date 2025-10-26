'use client'

import { useState } from 'react'
import style from './buttons-reviews.module.scss'
import { useRenderReviews } from '@/providers/render-reviews-context/render-reviews-context'

const ReviewsButtons = () => {
    const [active, setActive] = useState('Мои отзывы')
    const { setRender } = useRenderReviews()
    return (
        <div className={style.bookingButtonsWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Отзывы
                </h1>
            </div>
            <div className={style.buttons}>
                <div className={style.button}>
                    <button onClick={() => 
                        {setActive('Мои отзывы'), setRender('Мои отзывы')}} 
                        className={`
                            ${style.buttonItem} 
                            ${active === 'Мои отзывы' && style.active}`}>
                        Мои отзывы
                    </button>
                </div>
                <div className={style.button}>
                    <button onClick={() => {setActive('Ожидают отзыва'), setRender('Ожидают отзыва')}}
                        className={`
                            ${style.buttonItem}
                            ${active === 'Ожидают отзыва' && style.active}`}>
                        Ожидают отзыва
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewsButtons