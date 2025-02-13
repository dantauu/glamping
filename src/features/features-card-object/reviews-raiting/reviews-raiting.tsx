import ProgressBar from '@/shared/ui/progress-bar/progress-bar'
import style from './reviews-raiting.module.scss'

const ReviewsRaiting = () => {
    return (
			<div className={style.reviewsRaitingWrapper}>
				<div className={style.reviewsTextWrapper}>
					<div className={style.title}>
						<h1 className={style.titleInner}>Отзывы</h1>
					</div>
					<div className={style.raitingWrapper}>
						<div className={style.greenBlock}>
							<p className={style.greenBlockText}>9,8</p>
						</div>
						<div className={style.raitingText}>
							<p className={style.raitingTextInner}>Превосходно</p>
						</div>
						<div className={style.countReviews}>
							<p className={style.countReviewsText}>| 27 отзывов</p>
						</div>
					</div>
				</div>

				<div className={style.fullLineWrapper}>
					<div className={style.lineWrapper}>
						<div className={style.titleLine}>
							<div className={style.lineText}>
								<p className={style.lineTextInner}>
                                    Расположено
                                </p>
							</div>
							<div className={style.lineNumber}>
								<p className={style.lineNumberInner}>9.8</p>
							</div>
						</div>
						<div className={style.line}>
							<ProgressBar progress={97} width='312px' />
						</div>
					</div>

					<div className={style.lineWrapper}>
						<div className={style.titleLine}>
							<div className={style.lineText}>
								<p className={style.lineTextInner}>
                                    Питание
                                </p>
							</div>
							<div className={style.lineNumber}>
								<p className={style.lineNumberInner}>10</p>
							</div>
						</div>
						<div className={style.line}>
							<ProgressBar progress={100} width='312px' />
						</div>
					</div>

					<div className={style.lineWrapper}>
						<div className={style.titleLine}>
							<div className={style.lineText}>
								<p className={style.lineTextInner}>
                                    Персонал (обслуживание)
                                </p>
							</div>
							<div className={style.lineNumber}>
								<p className={style.lineNumberInner}>
                                    8
                                </p>
							</div>
						</div>
						<div className={style.line}>
							<ProgressBar progress={80} width='312px' />
						</div>
					</div>

					<div className={style.lineWrapper}>
						<div className={style.titleLine}>
							<div className={style.lineText}>
								<p className={style.lineTextInner}>
                                    Качество Wi-Fi
                                </p>
							</div>
							<div className={style.lineNumber}>
								<p className={style.lineNumberInner}>7,5</p>
							</div>
						</div>
						<div className={style.line}>
							<ProgressBar progress={75} width='312px' />
						</div>
					</div>

					<div className={style.lineWrapper}>
						<div className={style.titleLine}>
							<div className={style.lineText}>
								<p className={style.lineTextInner}>
                                    Удобство в домике
                                </p>
							</div>
							<div className={style.lineNumber}>
								<p className={style.lineNumberInner}>
                                    9.5
                                </p>
							</div>
						</div>
						<div className={style.line}>
							<ProgressBar progress={92} width='312px' />
						</div>
					</div>

                    <div className={style.lineWrapper}>
                <div className={style.titleLine}>
                    <div className={style.lineText}>
                        <p className={style.lineTextInner}>
                            Соотношение цена/качество
                        </p>
                    </div>
                    <div className={style.lineNumber}> 
                        <p className={style.lineNumberInner}>
                            7
                        </p>
                    </div>
                </div>
                <div className={style.line}>
                    <ProgressBar progress={70} width='312px' />
                </div>
            </div>

            <div className={style.lineWrapper}>
                <div className={style.titleLine}>
                    <div className={style.lineText}>
                        <p className={style.lineTextInner}>
                            Чистота
                        </p>
                    </div>
                    <div className={style.lineNumber}> 
                        <p className={style.lineNumberInner}>
                            10
                        </p>
                    </div>
                </div>
                <div className={style.line}>
                    <ProgressBar progress={100} width='312px' />
                </div>
            </div>
		  </div>
		</div>
		)
}

export default ReviewsRaiting