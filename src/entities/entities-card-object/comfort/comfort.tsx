'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { comfortItems } from '../../../../public/data/data'
import style from './comfort.module.scss'
import ComfortMobile from './comfort-mobile/comfort-mobile'

const Comfort = () => {
    const isMobile = useMediaQuery('(max-width: 1335px)')
    return (
        <>
        {isMobile ? <ComfortMobile /> : (
            <div className={style.comfortWrapper}>
				<div className={style.comfortLeftWrapper}>
					<div className={style.title}>
						<h1 className={style.titleInner}>
							Какие удобства и услуги вас ждут
						</h1>
					</div>
					<div className={style.comfortCardsWrapper}>
						{comfortItems.map((item, index) => (
							<div key={index} className={style.comfortCard}>
								<div className={style.comfortImg}>
									<img src={item.img} alt='' />
								</div>
								<div className={style.comfortText}>
									<p className={style.comfortTextInner}>{item.text}</p>
								</div>
							</div>
						))}
					</div>
                    <div className={style.fullReviewCharacter}>
                        <div className={style.fullReviewText}>
                            <p className={style.fullReviewTextInner}>
                                Смотреть все характеристики
                            </p>
                        </div>
                        <div className={style.fullReviewImg}>
                            <img className={style.fullReviewImgInner} 
                            src={'/assets/img/arrow-comfort.svg'} alt="" />
                        </div>
                    </div>
				</div>
				<div className={style.comfortRightWrapper}>
					<div className={style.reviewTitle}>
						<div className={style.reviewNumber}>
							<div className={style.reviewImg}>
								<img className={style.reviewImgInner} 
                                src={'/assets/img/green-box.svg'} alt='' />
							</div>
                            <div className={style.reviewText}>
                                <p className={style.reviewTextInner}>
                                    9,8
                                </p>
                            </div>
						</div>
                        <div className={style.reviewRaiting}>
                            <div className={style.reviewRaitingTitle}>
                                <p className={style.reviewRaitingTitleInner}>
                                    Превосходно
                                </p>
                            </div>
                            <div className={style.reviewCount}>
                                <p className={style.reviewCountInner}>
                                    27 отзывов 
                                </p>
                            </div>
                        </div>
					</div>
                    <div className={style.reviewDescription}>
                        <p className={style.reviewDescriptionInner}>
                            С мужем уехали отмечать годовщину и это было невероятно))) расположение невероятно красивое в тисо-самшитовой роще национальноаааааа
                        </p>
                    </div>
                    <div className={style.human}>
                        <div className={style.humanAvatar}>
                            <img src={'/assets/img/avatar-ann.png'} alt="" />
                        </div>
                        <div className={style.avatarDescription}>
                            <div className={style.avatarName}>
                                <p className={style.avatarNameInner}>
                                    Анна П.
                                </p>
                            </div>
                            <div className={style.avatarDate}>
                                <p className={style.avatarDateInner}>
                                    25.07.2024
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.reviewFull}>
                        <p className={style.reviewFullInner}>
                            Все отзывы
                        </p>
                    </div>
				</div>
			</div>
        )}
            </>
		)
}

export default Comfort