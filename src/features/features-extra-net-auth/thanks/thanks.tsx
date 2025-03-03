'use client'

import Link from 'next/link'
import style from './thanks.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import ThanksMobile from './thanks-mobile/thanks-mobile'

const Thanks = () => {
    const isMobile = useMediaQuery('(max-width: 1340px)')
    return (
        <>
        {isMobile ? <ThanksMobile /> : (
            <div className={style.thanksWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Благодарим за регистрацию!
                </h1>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Пока мы проверяем ваши данные, вы можете зарегистрировать объект размещения и подключить менеджер каналов в личном кабинете.
                </p>
            </div>
            <Link href={'/extra-net-lk/my-object'} className={style.button}>
                <button className={style.buttonInner}>
                    Перейти в личный кабинет
                </button>
            </Link>
        </div>
        )}
        </>
    )
}

export default Thanks