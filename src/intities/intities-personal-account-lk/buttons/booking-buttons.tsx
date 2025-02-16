'use client'

import { useState } from 'react'
import style from './booking-buttons.module.scss'

const BookingButtons = () => {
    const [active, setActive] = useState('Предстоящие')
    return (
        <div className={style.bookingButtonsWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Бронирования
                </h1>
            </div>
            <div className={style.buttons}>
                <div className={style.button}>
                    <button onClick={() => setActive('Предстоящие')} 
                        className={`
                            ${style.buttonItem} 
                            ${active === 'Предстоящие' && style.active}`}>
                        Предстоящие
                    </button>
                </div>
                <div className={style.button}>
                    <button onClick={() => setActive('Архив')} 
                        className={`
                            ${style.buttonItem}
                            ${active === 'Архив' && style.active}`}>
                        Архив
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookingButtons