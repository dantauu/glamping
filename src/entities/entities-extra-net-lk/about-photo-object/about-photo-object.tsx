'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import style from './about-photo-object.module.scss'
import AboutPhotoObjectMobile from './about-photo-object-mobile/about-photo-object-mobile'

const AboutPhotoObject = () => {
    const isMobile = useMediaQuery('(max-width: 1330px)')
    return (
        <>
        {isMobile ? <AboutPhotoObjectMobile /> : (
            <div className={style.mainWrapper}>
        <div className={style.title}>
            <h1 className={style.titleInner}>
                Фотографии объекта
            </h1>
        </div>
        <div className={style.aboutPhotoObjectWrapper}>
            <div className={style.mainImgWrapper}>
                <div className={style.mainImg}>
                    <img className={style.mainImgInner}
                     src={'/assets/img/lagunaOne.jpg'} alt="" />
                </div>
                <div className={style.mainText}>
                    <p className={style.mainTextInner}>
                        Фото обложки
                    </p>
                </div>
                <div className={style.mainKrest}>
                    <img className={style.mainKrestInner}
                     src={'/assets/img/krest-black.svg'} alt="" />
                </div>
            </div>
            <div className={style.rightPart}>
                <div className={style.mainItemWrapper}>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.downPartImg}>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.itemWrapper}>
                        <div className={style.itemImg}>
                            <img className={style.itemImgInner}
                             src={'/assets/img/card-image-fig.jpg'} alt="" />
                        </div>
                        <div className={style.krestItem}>
                            <img src={'/assets/img/krest-black.svg'} alt="" />
                        </div>
                    </div>
                    <div className={style.addPhoto}>
                        <div className={style.addPhotoImg}>
                            <img src={'/assets/img/plus-green.svg'} alt="" />
                        </div>
                        <div className={style.addPhotoText}>
                            <p className={style.addPhotoTextInner}>
                                Добавить ещё
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )}
    </>
    )
}

export default AboutPhotoObject