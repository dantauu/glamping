'use client'

import Link from 'next/link'
import { myObjectItems } from '../../../../public/data/data'
import style from './card-extra.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const CardExtra = () => {
    const isMobile = useMediaQuery('(max-width: 1095px)')
    return (
            <div className={style.myObjectWrapper}>
            <div className={style.cardWrapper}>
                {myObjectItems.map((item, index) => (
                    <Link href={'/extra-net-about-card-information/about-card'} key={index} className={style.itemCard}>
                        <div className={style.img}>
                            {isMobile ? (
                                 <img className={style.imgInner} 
                                 src={'/assets/img/road-mobile.png'} />
                            ) 
                            : (
                                <img src={item.img} />
                            )}
                            
                        </div>
                    <div className={style.wrapper}>
                        <div className={style.information}>
                            <div className={style.titleInformation}>
                                <h2 className={style.titleInformationInner}>
                                    {item.title}
                                </h2>
                            </div>
                            <div className={style.description}>
                                <p className={style.descriptionInner}>
                                    {item.description}
                                </p>
                            </div>
                            <div className={style.idWrapper}>
                                <div className={style.id}>
                                    <p className={style.idInner}>
                                        ID:
                                    </p>
                                </div>
                                <div className={style.idNumber}>
                                    <p className={style.idNumberInner}>
                                        {item.idNumber}
                                    </p>
                                </div>
                                <div className={style.idImg}>
                                    <img src={item.copyIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={style.stasusWrapper}>
                            <div className={style.status}>
                                <div className={style.blockWrapper}>
                                    <div className={style.check}>
                                        <img src={'/assets/img/check-green.svg'} alt="" />
                                    </div>
                                    <div className="">
                                        <p className={style.green}>
                                            {item.stasus}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.stasusDescription}>
                                    <p className={style.stasusDescriptionInner}>
                                        Страница объекта на сайте
                                    </p>
                                </div>
                            </div>
                            <div className={style.buttonDotWrapper}>
                                <div className={style.dots}>
                                    <img src={item.dotsIcon} alt="" />
                                </div>
                            </div>
                        </div>
                      </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default CardExtra