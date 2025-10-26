import style from './wait-reviews.module.scss'

const WaitReviews = () => {
	return (
		<div className={style.mainWrapper}>
			<div className={style.wrapper}>
				<div className={style.titleIcon}>
					<img src={'/assets/img/glamping.svg'} alt='' />
				</div>
				<div className={style.titleText}>
                    <div className="">
					    <h2 className={style.titleTextInner}>
                            У вас не было бронирований
                        </h2>
                    </div>
                    <div className={style.description}>
                        <p className={style.descriptionInner}>
                            Здесь будут отели, которые можно будет оценить
                        </p>
                    </div>
				</div>
				<div className={style.button}>
					<div className={style.buttonItem}>
						<button className={style.buttonInner}>
							Подобрать место для отдыха
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WaitReviews
