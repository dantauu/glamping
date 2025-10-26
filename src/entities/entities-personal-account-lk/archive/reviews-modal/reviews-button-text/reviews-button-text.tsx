import style from './reviews-button-text.module.scss'

const ReviewsButtonText = () => {
    return (
        <div className={style.reviewsButtonTextWrapper}>
            <div className={style.buttonText}>
                <button className={style.buttonInner}>
                    Отправить отзыв
                </button>
            </div>
            <div className={style.text}>
                <p className={style.textInner}>
                    Нажимая на кнопку «Отправить отзыв», я даю согласие на обработку <span className={style.border}>персональных данных</span> и подтверждаю, что ознакомлен с правилами публикации.
                </p>
            </div>
        </div>
    )
}

export default ReviewsButtonText