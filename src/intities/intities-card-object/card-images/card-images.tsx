'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import style from './card-images.module.scss'
import CardImagesMobile from './card-images-mobile/card-images-mobile'

const CardImages = () => {
    const isMobile = useMediaQuery('(max-width: 1335px)')
    return (
        <>
        {isMobile ? <CardImagesMobile /> : (
            <div className={style.cardImagesWrapper}>
            <div className={style.cardItem}>
                <img className={style.cardItemInner} 
                    src={'/assets/img/card-image-fig.jpg'} alt="" />
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
        )}
        </>
    )
}

export default CardImages