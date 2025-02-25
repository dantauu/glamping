'use client'
import { useState } from 'react'
import style from './reviews-modal-title.module.scss'


const ratingTexts = {
    1: '1 Ужасно',
    2: '2 Плохо',
    3: '3 Слабо',   
    4: '4 Неудовлетворительно',
    5: '5 Средне',
    6: '6 Выше среднего',
    7: '7 Очень хорошо',
    8: '8 Отлично',
    9: '9 Превосходно',
    10: '10 Великолепно'
  }

const ReviewsModalTitle = () => {
  const [rating, setRating] = useState<number>(0)
  const [ratingText, setRatingText] = useState<string>('')
    const handleRating = (selectedRating: number) => {
    setRating(prev => prev === selectedRating ? 0 : selectedRating)
    setRatingText(prev => (prev) === 
    ratingTexts[selectedRating as keyof typeof ratingTexts] ? '' 
        : 
    ratingTexts[selectedRating as keyof typeof ratingTexts])
  }

  const getStarColor = (index: number) => {
    if (rating >= 1 && rating <= 4) return style.red
    if (rating >= 5 && rating <= 6) return style.yellow
    if (rating >= 7 && rating <=10) return style.green
    return ''
  }

  const getColorClass = () => {
  if (rating >= 1 && rating <= 4) return style.redText;
  if (rating >= 5 && rating <= 6) return style.yellowText;
  if (rating >= 7) return style.greenText;
  return '';
};

    return (
        <div className={style.reviewsModalWrapper}>
            <div className={style.titleWrapper}>
              <div className={style.wrapper}>
                <div className={style.title}>
                    <h2 className={style.titleInner}>
                        Оцените своё пребывание здесь:
                    </h2>
                </div>
                <div className={style.titleStar}>
                    <div className={style.raitingText}>
                        <span className={getColorClass()}>
                            {ratingText.match(/\d+/)?.[0]}
                        </span>
                        {ratingText.replace(/\d+\s*/, '')}
                    </div>
                <div className={style.titleStarWrapper}>
                    {[...Array(10)].map((_, index) => (
                <div 
                    key={index}
                    className={`${style.starItem} ${index < rating && getStarColor(index)}`}
                    onClick={() => handleRating(index + 1)}>
                            <img 
                                src={'/assets/img/star-re.svg'} />
                </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className={style.imgWrapper}>
                    <div className={style.img}>
                        <img className={style.imgInner}
                         src={'/assets/img/laguna.jpg'} alt="" />
                    </div>
                    <div className={style.imgTitle}>
                        <p className={style.imgTitleInner}>
                            Глэмпинг «Лагуна»
                        </p>
                    </div>
                    <div className={style.imgDescription}>
                        <p className={style.imgDescriptionInner}>
                            Краснодарский край, Елизовский район
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsModalTitle