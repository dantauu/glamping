import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './comfort-sleep.module.scss'

const ComfortSleep = () => {
	return (
		<div className={style.comfortSleepWrapper}>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Спальня
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Двуспальная кровать
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Тапочки 2 шт.
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Халаты 2 шт.
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Постельное белье
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Телевизор
                            </p>
						</div>
					</div>
					<div className={style.inputWrapper}>
						<div className={style.inputButtonWrapper}>
							<div className={style.input}>
								<input className={style.inputInner} type="text" />
							</div>
							<div className={style.add}>
								<p className={style.addInner}>
									Добавить
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ComfortSleep
