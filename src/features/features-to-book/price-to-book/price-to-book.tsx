import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './price-to-book.module.scss'

const PriceToBook = () => {
    return (
        <div className={style.priceToBookWrapper}>
            <div className={style.title}>
                <h2 className={style.titleInner}>
                    Стоимость бронирования
                </h2>
            </div>
            <div className={style.informationGuest}>
                <p className={style.informationGuestInner}>
                    За 1 ночь, 3 гостей
                </p>
            </div>
            <div className={style.checkBoxWrapper}>
                <div className="">
                    <CheckBoxSquare />
                </div>
                <div className={style.checkBoxText}>
                    <p className={style.checkBoxTextInner}>
                        У меня есть промокод
                    </p>
                </div>
            </div>
            <div className={style.end}>
                <div className={style.endText}>
                    <p className={style.endTextInner}>
                        Итого:
                    </p>
                </div>
                <div className={style.price}>
                    <p className={style.priceInner}>
                        6 000 р.
                    </p>
                </div>
            </div>
            <div className={style.border}></div>
                <div className={style.priceDescription}>
                    <p className={style.priceDescriptionInner}>
                        Не включено в стоимость (оплачивается на месте)
                    </p>
                </div>
                <div className={style.storage}>
                    <div className={style.storageText}>
                        <p className={style.storageTextInner}>
                            Курортный сбор:
                        </p>
                    </div>
                    <div className={style.storageCount}>
                        <p className={style.storageCountInner}>
                            100р.
                        </p>
                    </div>
                </div>
            </div>  
    )
}

export default PriceToBook