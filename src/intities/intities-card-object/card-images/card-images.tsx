import style from './card-images.module.scss'

const CardImages = () => {
    return (
        <div className={style.cardImagesWrapper}>
            <div className={style.cardItem}>
                <img src={'/assets/img/card-image-fig.jpg'} alt="" />
            </div>
            <div className={style.column}>
                <div className={style.cardItem}>
                    <img src={'/assets/img/card-image-teble.jpg'} alt="" />
                </div>
                <div className={style.cardItem}>
                    <img src={'/assets/img/card-image-bed.jpg'} alt="" />
                </div>
            </div>
            <div className={style.column}>
                <div className={style.cardItem}>
                    <img src={'/assets/img/card-image-lake-house.jpg'} alt="" />
                </div>
                <div className={style.cardItem}>
                    <img src={'/assets/img/card-image-towel.jpg'} alt="" />
                </div>
                <div className={style.absoluteWrapper}>
                    <div className={style.img}>
                        <img className={style.imgInner} 
                        src={'/assets/img/double-icon.svg'} alt="" />
                    </div>
                    <div className={style.text}>
                        <p className={style.textInner}>
                            Показать все фото (14)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardImages