import ButtonCardObject from '@/shared/ui/button-card-object/button-card-object'
import style from './title-glamping.module.scss'

const TitleGlamping = () => {
    return (
        <div className={style.glampingTitleWrapper}>
            <div className={style.titleImg}>
                <div className={style.titleText}>
                    <h1 className={style.titleTextInner}>
                        Глэмпинг «Лагуна»
                    </h1>
                </div>
                <div className={style.titleHartImg}>
                    <img className={style.titleHartImgInner} 
                    src={'/assets/img/heart.svg'} alt="" />
                </div>
            </div>
            <div className={style.glampingLocateWrapper}>
                <div className={style.locateLeft}>
                <div className={style.glampingLocateText}>
                    <p className={style.glampingLocateTextInner}>
                        Краснодарский край, Елизовский район
                    </p>
                </div>
                <div className={style.glampingMapWrapper}>
                    <div className={style.glampingMapImg}>
                        <img className={style.glampingMapImgInner} 
                        src={'/assets/img/map.svg'} alt="" />
                    </div>
                    <div className={style.glampingMapText}>
                        <p className={style.glampingMapTextInner}>
                            Показать на карте
                        </p>
                    </div>
                </div>
                </div>
                <div className={style.locatePart}>
                    <div className={style.raitingWrapper}>
                        <div className={style.locateText}>
                            <p className={style.locateTextInner}>
                                Превосходно
                            </p>
                        </div>
                        <div className={style.raitingImg}>
                            <img src={'/assets/img/green-box.svg'} alt="" />
                        </div>
                        <div className={style.raitingNumber}>
                            <p className={style.raitingNumberInner}>
                                9,8
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.buttonsWrapper}>
                <div className={style.buttonsLeft}>
                <ButtonCardObject 
                    buttonItem={style.buttonInformation} 
                    text={'Общая информация'} />
                <ButtonCardObject 
                    buttonItem={style.buttonServices}
                    text={'Удобства и услуги'} />
                <ButtonCardObject
                    buttonItem={style.buttonMap}
                    text={'Расположение'} />
                <ButtonCardObject
                    buttonItem={style.buttonReviews}
                    text={'Отзывы'} />
                    </div>
                <ButtonCardObject 
                    buttonItem={style.buttonBron}
                    text={'Забронировать'} />
            </div>
        </div>
    )
}

export default TitleGlamping