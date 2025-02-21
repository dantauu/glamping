import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './specifications-environment.module.scss'
import CheckBoxCicle from '@/shared/ui/chekcboxes/checkbox-circle/checkbox-circle'

const SpecificationsEnvironment = () => {
	return (
		<div className={style.funSportWrapper}>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Окружение
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Вид на горную реку
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Вид на лес
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Вид на горы
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

export default SpecificationsEnvironment
