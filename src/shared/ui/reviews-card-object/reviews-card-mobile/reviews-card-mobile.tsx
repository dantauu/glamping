'use client'

import { useState } from 'react'
import { reviewsCardObjectItems } from '../../../../../public/data/data'
import style from './reviews-card-mobile.module.scss'

const shortComment = [
    "С мужем уехали отмечать годовщину и это было невероятно))) расположение... номер комфо...",
]

const ReviewsCardObjectMobile = () => {
    const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({})

  const toggleReview = (id: number) => {
    setExpandedReviews(prev => ({ ...prev, [id]: !prev[id] }))
  }
    return (
        <div className={style.reviewCardObjectWrapper}>
            {reviewsCardObjectItems.map((item, index) => (
               <>
               {item.id === 1 && (
                  <div key={index} className={style.reviewCardObject}>
                  <div className={style.upPart}>
                    <div className={style.leftPartCard}>
                        <div className={style.avatarItem}>
                        <div className={style.avatarImg}>
                            <img src={item.avatar} alt="" />
                        </div> 
                        <div className={style.mainWrapper}>
                           <div className={style.nameDateWrapper}>
                              <div className={style.name}>
                                    <p className={style.nameInner}>
                                       {item.name}
                                    </p>
                              </div> 
                              <div className={style.date}>
                                 <p className={style.dateInner}>
                                    {item.date}
                                 </p>
                              </div>
                            </div>
                           <div className={style.rightPartCard}>
                              <div className={style.like}>
                                 <div className={style.likeImg}>
                                    <img src={item.likeImg} alt="" />
                                 </div>
                                <div className={style.countLike}>
                                    <p className={style.countLikeInner}>
                                        {item.likeCount}
                                    </p>
                                </div>
                            </div>
                         </div>
                        </div>
                        </div>
                        <div className={style.left}>
                           <div className={style.box}>
                              <p className={style.boxText}>
                                 {item.countBox}
                              </p>
                           </div>
                           <div className={style.raitingText}>
                              <p className={style.raitingTextInner}>
                                 {item.raitingText}
                              </p>
                           </div>
                        </div>
                    </div>
                </div>
                    <div className={style.middlePart}>
                        <div className={style.title}>
                            <h2 className={style.titleInner}>
                                {item.title}
                            </h2>
                        </div>
                        <div className={style.comment}>
                            <p className={style.commentTextInner}>
                               <span className={style.spanText}>{item.commentTitle}</span> {expandedReviews[item.id] 
                              ? item.comment 
                              : shortComment || item.comment}
                            </p>
                        </div>
                        {item.comment && item.comment.length > 200 && (
                        <button 
                           className={style.moreButton}
                           onClick={() => toggleReview(item.id)}>
                              {expandedReviews[item.id] ? 'Скрыть' : 'Показать полностью'}
                        </button>)}
                        {item.id === 1 && (
                            <div className={style.imagesWrapper}>
                            {item.imgs?.map((item, index) => (
                                <div key={index} className={style.imagesItem}>
                                    <img src={item} alt="" /> 
                                </div>
                            ))}
                        </div>
                        )}
                    </div>
                </div>
               )}
                </>
            ))}
        </div>
    )
}

export default ReviewsCardObjectMobile