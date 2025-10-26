import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './more.module.scss'

const More = () => {
	return (
		<div className={style.kidsWrapper}>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Прочее
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Можно с домашники животными
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Частота уборки: ежедневно
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Круглосуточная регистрация
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Бесплатная парковка
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Курение запрещено
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

export default More
