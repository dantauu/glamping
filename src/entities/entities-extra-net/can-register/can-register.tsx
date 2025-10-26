'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import style from './can-register.module.scss'
import CanRegisterMobile from './can-register-mobile/can-register-mobile'

const CanRegister = () => {
    const isMobile = useMediaQuery('(max-width: 1050px)')
    return (
        <>
        {isMobile ? <CanRegisterMobile /> : (
            <div className={style.canRegisterWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Зарегистрировать объект могут:
                </h1>
            </div>
            <div className={style.wrapper}>
            <div className={style.borderBoxClean}></div>
            <div className={style.borderBoxCleanTwo}></div>
            <div className={style.borderBoxCleanThree}></div>
            <div className={style.borderBoxIndivid}>
                <p className={style.borderBoxIndividInner}>
                    Индивидуальные предприниматели
                </p>
            </div>
            <div className={style.borderBoxFace}>
                <p className={style.borderBoxIndividInner}>
                    Юридические лица
                </p>
            </div>
            <div className={style.borderBoxSolo}>
                <p className={style.borderBoxIndividInner}>
                    Самозанятые
                </p>
            </div>
            </div>
        </div>
        )}
        </>
    )
}

export default CanRegister