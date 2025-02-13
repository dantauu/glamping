import ReviewsCardObject from "@/shared/ui/reviews-card-object/reviews-card-object"
import style from './reviews-card-comp.module.scss'

const ReviewsCardComp = () => {
    return (
        <div className={style.reviewsCardCompWrapper}>
            <div className={style.title}>
                <div className={style.leftPart}>
                    <h2 className={style.titleInnerText}>
                        27 отзывов
                    </h2>
                </div>
                <div className={style.rightPart}>
                    <div className={style.sort}>
                        <p className={style.sortText}>
                            Сортировать:
                        </p>
                    </div>
                    <div className={style.date}>
                        <button className={style.dateButton}>
                            По дате
                        </button> 
                    </div>
                    <div className={style.estimation}>
                        <button className={style.estimationButton}>
                            По оценке
                        </button>  
                    </div>
                </div>
            </div>
            <ReviewsCardObject />
        </div>
    )
}

export default ReviewsCardComp