import CheckBoxCicle from '@/shared/ui/chekcboxes/checkbox-circle/checkbox-circle'
import style from './specifications-sleep.module.scss'

const SpecificationsSleep = () => {
	return (
		<div className={style.internetWrapper}>
			<div className={style.title}>
				<h2 className={style.titleInner}>
					Отметьте основные характеристики:
				</h2>
			</div>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Спальные места
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                            	Двуспальная кровать
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Односпальная кровать
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
								2 односпальных кровати
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
								Диван-кровать
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
								Детская кровать
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default SpecificationsSleep
