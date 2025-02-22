'use client'

import style from './modal-years.module.scss'

const ModalYears = ({ showModal }: {showModal: boolean}) => {
    return (
        <>
        {showModal && (
            <div className={style.modalYearsWrapper}>
            <div className={style.itemsWrapper}>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    до 1 года
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    1 год
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    2 года
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    3 года
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    4 года
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    5 лет
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    17 лет
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    18 лет
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    19 лет
                </p>
            </div>
            <div className={style.itemYear}>
                <p className={style.itemYearText}>
                    20 лет
                </p>
            </div>
            </div>
        </div>
        )}
        </>
    )
}

export default ModalYears