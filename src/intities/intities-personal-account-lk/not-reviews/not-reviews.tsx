import style from './not-reviews.module.scss'

const NotReviews = () => {
	return (
		<div className={style.mainWrapper}>
			<div className={style.wrapper}>
				<div className={style.titleIcon}>
					<img src={'/assets/img/reviews.svg'} alt='' />
				</div>
				<div className={style.titleText}>
					<h2 className={style.titleTextInner}>
						У вас пока нет отзывов
					</h2>
				</div>
				<div className={style.description}>
					<p className={style.descriptionInner}>
                  Отзывы на отели будут отображаться в этом разделе
               </p>
				</div>
			</div>
		</div>
	)
}

export default NotReviews
