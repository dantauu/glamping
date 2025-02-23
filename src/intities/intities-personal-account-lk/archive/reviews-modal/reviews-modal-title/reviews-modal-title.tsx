import style from './reviews-modal-title.module.scss'

const ReviewsModalTitle = () => {
    return (
        <div className={style.reviewsModalWrapper}>
            <div className={style.titleWrapper}>
              <div className={style.wrapper}>
                <div className={style.title}>
                    <h2 className={style.titleInner}>
                        Оцените своё пребывание здесь:
                    </h2>
                </div>
                <div className={style.titleStarWrapper}>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
                    </div>
                    <div className={style.starItem}>
                        <img src={'/assets/img/star-re.svg'} alt="" />
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