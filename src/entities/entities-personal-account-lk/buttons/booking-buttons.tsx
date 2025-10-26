'use client'

import { useState } from 'react'
import style from './booking-buttons.module.scss'
import RenderBooking from '../render-booking/render-booking'
import { useRenderBooking } from '@/providers/render-booking-context/render-booking-context'

const BookingButtons = () => {
    const [active, setActive] = useState('Предстоящие')
    const { setRender } = useRenderBooking()
    return (
        <div className={style.bookingButtonsWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Бронирования
                </h1>
            </div>
            <div className={style.buttons}>
                <div className={style.button}>
                    <button onClick={() => 
                        {setActive('Предстоящие'), setRender('Предстоящие')}} 
                        className={`
                            ${style.buttonItem} 
                            ${active === 'Предстоящие' && style.active}`}>
                        Предстоящие
                    </button>
                </div>
                <div className={style.button}>
                    <button onClick={() => {setActive('Архив'), setRender('Архив')}}
                        className={`
                            ${style.buttonItem}
                            ${active === 'Архив' && style.active}`}>
                        Архив
                    </button>
                </div>
            </div>
            <RenderBooking />
        </div>
    )
}

export default BookingButtons