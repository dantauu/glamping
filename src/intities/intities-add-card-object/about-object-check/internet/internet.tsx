import CheckBoxCicle from '@/shared/ui/chekcboxes/checkbox-circle/checkbox-circle'
import style from './internet.module.scss'

const Internet = () => {
	return (
		<div className={style.internetWrapper}>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Интернет
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Бесплатный Wi-Fi
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Wi-Fi платно
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Нет интернета
                            </p>
						</div>
					</div>
					<div className={style.buttonsWrapper}>
						<div className={style.leftButtonWrapper}>
							<div className={style.icon}>
								<img src={'/assets/img/plus-black.svg'} alt='' />
							</div>
							<div className={style.buttonLeft}>
								<button className={style.buttonLeftInner}>
									Добавить пункт
								</button>
							</div>
						</div>
						<div className={style.rightButton}>
							<button className={style.rightButtonInner}>
								Добавить комментарий
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Internet
