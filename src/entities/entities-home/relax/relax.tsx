'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import style from './relax.module.scss'

const Relax = () => {
    const isMobile = useMediaQuery('(max-width: 905px)')
    return (
        <div className={style.relaxBack}>
            <div className={style.relaxWrapper}>
                {isMobile ? (
                    <div className={style.relaxText}>
                        <h1 className={style.textInner}>
                            ГЛЭМПИНГИ <br /> ДЛЯ РЕЛАКСАЦИИ
                        </h1>
                    </div>
                ) : (
                    <div className={style.relaxText}>
                        <h1 className={style.textInner}>
                            ГЛЭМПИНГИ ДЛЯ РЕЛАКСАЦИИ
                        </h1>
                    </div>
                )}
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Красивые виды, спа-процедуры, йога-ретриты, медитации
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Relax