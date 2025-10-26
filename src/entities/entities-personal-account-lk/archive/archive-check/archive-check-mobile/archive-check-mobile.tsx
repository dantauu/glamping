import style from './archive-check-mobile.module.scss'

const ArchiveCheckMobile = () => {
    return (
        <div className={style.wrapper}>
        <div className={style.bookingCheckWrapper}>
            <div className={style.padingWrapper}>
                <div className={style.itemsWrapper}>
                    <div className={style.item}>
                        <div className={style.itemIcon}>
                            <img src={'/assets/img/eco-icon-bron-4.svg'} alt="" />
                        </div>
                        <div className={style.itemText}>
                            <p className={style.itemTextInner}>
                                Бесплатная отмена брони до 18 июля
                            </p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.itemIcon}>
                            <img src={'/assets/img/eco-icon-bron-2.svg'} alt="" />
                        </div>
                        <div className={style.itemText}>
                            <p className={style.itemTextInner}>
                                2 взрослых, 1 ребёнок
                            </p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.itemIcon}>
                            <img src={'/assets/img/eco-icon-bron-3.svg'} alt="" />
                        </div>
                        <div className={style.itemText}>
                            <p className={style.itemTextInner}>
                                Завтрак включен
                            </p>
                        </div>
                    </div>
                  <div className={style.conditions}>
                    <p className={style.conditionsInner}>
                        Условия тарифа
                    </p>
                </div>
                </div>
                <div className={style.weekWrapper}>
                    <div className={style.weekItem}>
                        <div className={style.weekTitle}>
                            <p className={style.weekTitleInner}>
                                Заезд: с 14:00 
                            </p>
                        </div>
                        <div className={style.weelDescription}>
                            <p className={style.weelDescriptionInner}>
                                30.09.2024, пн
                            </p>
                        </div>
                    </div>
                    <div className={style.weekItem}>
                        <div className={style.weekTitle}>
                            <p className={style.weekTitleInner}>
                                Выезд: до 12:00 
                            </p>
                        </div>
                        <div className={style.weelDescription}>
                            <p className={style.weelDescriptionInner}>
                                30.09.2024, вт
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.mainDescription}>
                    <p className={style.mainDescriptionInner}>
                        Для заселения гражданам РФ необходимо предъявить паспорт РФ, детям — свидетельство о рождении. Для иностранцев — иностранный паспорт.
                    </p>
                </div>
            </div>
        </div>
        <div className={style.border}></div>
        <div className={style.ticketWrapper}>
            <div className={style.priceWrapper}>
                <div className={style.price}>
                    <div className={style.priceImgWrapper}>
                        <div className={style.priceImg}>
                            <img className={style.priceImgInnet} 
                            src={'/assets/img/credit-card-check.svg'} alt="" />
                        </div>
                        <div className={style.priceText}>
                            <p className={style.priceTextInner}>
                                Оплачено
                            </p>
                        </div>
                    </div>
                    <div className={style.priceNumber}>
                        <p className={style.priceNumberInner}>
                            6 000 р.
                        </p>
                    </div>
                </div>
                <div className={style.priceDescription}>
                    <p className={style.priceDescriptionInner}>
                        Налоги и сборы не включены в стоимость
                        и оплачиваются на месте
                    </p>
                </div>
            </div>
        </div>
    </div>
    )   
}

export default ArchiveCheckMobile