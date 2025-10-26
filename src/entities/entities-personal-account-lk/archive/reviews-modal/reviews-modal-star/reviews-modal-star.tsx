'use client'
import { useState } from 'react'
import style from './reviews-modal-star.module.scss'

type Category = 
  'location' | 
  'food' | 
  'service' | 
  'wifi' | 
  'amenities' | 
  'value' | 
  'cleanliness'

const ReviewsModalStar = () => {
  const [ratings, setRatings] = useState<Record<Category, number>>({
    location: 0,
    food: 0,
    service: 0,
    wifi: 0,
    amenities: 0,
    value: 0,
    cleanliness: 0
  })

  const handleRating = (category: Category, selectedRating: number) => {
    setRatings(prev => ({
      ...prev,
      [category]: prev[category] === selectedRating ? 0 : selectedRating
    }))
  }

  const getStarColor = (rating: number) => {
    if (rating >= 1 && rating <= 4) return style.red
    if (rating >= 5 && rating <= 6) return style.yellow
    if (rating >= 7 && rating <= 10) return style.green
    return ''
  }

  const StarGroup = ({ category, title }: { category: Category, title: string }) => (
    <div className={style.itemStar}>
      <div className={style.starText}>
        <p className={style.starTextInner}>{title}</p>
      </div>
      <div className={style.starImgWrapper}>
        {[...Array(10)].map((_, index) => (
          <div 
            key={index}
            onClick={() => handleRating(category, index + 1)}
            className={`${style.starImg} ${index < ratings[category] && getStarColor(ratings[category])}`}
          >
            <img className={style.starImgInner} src="/assets/img/star-re.svg" alt="" />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className={style.fullWrapper}>
      <div className={style.reviewsModalStarWrapper}>
        <div className={style.firstWrapper}>
          <StarGroup category="location" title="Расположение" />
          <StarGroup category="food" title="Питание" />
          <StarGroup category="service" title="Обслуживание" />
          <StarGroup category="wifi" title="Качество Wi-Fi" />
        </div>
        <div className={style.secondWrapper}>
          <StarGroup category="amenities" title="Удобства в домике" />
          <StarGroup category="value" title="Цена/качество" />
          <StarGroup category="cleanliness" title="Чистота" />
        </div>
      </div>
      <div className={style.inputWrapper}>
        <div className={style.titleInput}>
          <p className={style.titleInputInner}>
            Ваше общее впечатление:<span className={style.red}>*</span>
          </p>
        </div>
        <div className={style.input}>
          <input className={style.inputInner} placeholder="Заголовок отзыва" type="text" />
        </div>
      </div>
    </div>
  )
}

export default ReviewsModalStar