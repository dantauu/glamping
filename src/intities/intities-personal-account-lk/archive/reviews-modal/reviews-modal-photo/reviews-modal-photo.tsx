'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import style from './reviews-modal-photo.module.scss'

const ReviewsModalPhoto = () => {
    const isMobile = useMediaQuery('(max-width: 890px)')
    return (
        <div className={style.wrapper}>
            <div className={style.mainTitle}>
                <p className={style.mainTitleInner}>
                    Добавьте фотографии
                </p>
            </div>
            <div className={style.reviewsModalPhotoWrapper}>
                <div className={style.img}>
                    <img src={'/assets/img/photos.svg'} alt="" />
                </div>
                <div className={style.title}>
                    <p className={style.titleInner}>
                        {isMobile ? 'Загрузить фото' : ' Нажмите, чтобы добавить фото или перетащите файл'}
                    </p>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        JPG/ PNG/ Максимум 10 Мбайт/ Минимум 312px x 312px  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewsModalPhoto