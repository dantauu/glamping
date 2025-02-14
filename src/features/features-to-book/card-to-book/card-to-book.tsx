import style from './card-to-book.module.scss'

const CardToBook = () => {
    return (
        <div className={style.cardToBookWrapper}>
            <div className={style.upTitle}>
            <div className={style.leftTitle}>
                <div className={style.titleWrapper}>
                    <div className={style.title}>
                        <h1 className={style.titleInner}>
                            Глэмпинг «Лагуна»
                        </h1>
                    </div>
                    <div className={style.description}>
                        <p className={style.descriptionInner}>
                            Краснодарский край, Елизовский район
                        </p>
                    </div>
                </div>
                <div className={style.columns}>
                    <div className={style.columnLeft}>
                        <div className={style.time}>
                            <p className={style.timeInner}>
                                Заезд: с 14:00 
                            </p>
                        </div>
                        <div className={style.date}>
                            <p className={style.dateInner}>
                                30.09.2024, пн
                            </p>
                        </div>
                    </div>
                    <div className={style.columnRight}>
                        <div className={style.time}>
                            <p className={style.timeInner}>
                                Выезд: до 12:00  
                            </p>    
                        </div>
                        <div className={style.date}>
                            <p className={style.dateInner}>
                                30.09.2024, вт
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.rightTitle}>
                <img src={'/assets/img/icon-bron.jpg'} alt="" />
            </div>
        </div>
            <div className={style.bottomPart}>
                <div className={style.leftColumn}>
                    <div className={style.columnItem}>
                        <div className={style.icon}>
                            <img className={style.iconInner}
                            src={'/assets/img/eco-icon-bron-1.svg'} alt="" />
                        </div>
                        <div className={style.iconText}>
                            <p className={style.iconTextInner}>
                                Береговой глэмп
                            </p>
                        </div>
                    </div>
                     <div className={style.columnItem}>
                        <div className={style.icon}>
                            <img className={style.iconInner}
                            src={'/assets/img/eco-icon-bron-2.svg'} alt="" />
                        </div>
                        <div className={style.iconText}>
                            <p className={style.iconTextInner}>
                                2 взрослых, 1 ребёнок
                            </p>
                        </div>
                    </div>
                    <div className={style.columnItem}>
                        <div className={style.icon}>
                            <img className={style.iconInner}
                            src={'/assets/img/eco-icon-bron-3.svg'} alt="" />
                        </div>
                        <div className={style.iconText}>
                            <p className={style.iconTextInner}>
                                Завтрак включен
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.rightColumn}>
                    <div className={style.columnItem}>
                        <div className={style.icon}>
                            <img className={style.iconInner}
                            src={'/assets/img/eco-icon-bron-4.svg'} alt="" />
                        </div>
                        <div className={style.iconText}>
                            <p className={style.iconTextInner}>
                                Бесплатная отмена брони до 18 июля
                            </p>
                        </div>
                    </div>
                    <div className={style.columnItem}>
                        <div className={style.icon}>
                            <img className={style.iconInner}
                            src={'/assets/img/eco-icon-bron-5.svg'} alt="" />
                        </div>
                        <div className={style.iconText}>
                            <p className={style.iconTextInner}>
                                Оплата онлайн 100 %
                            </p>
                        </div>
                    </div>
                    <div className={style.iconTextTarif}>
                        <p className={style.iconTextInnerTarif}>
                            Условия тарифа
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardToBook