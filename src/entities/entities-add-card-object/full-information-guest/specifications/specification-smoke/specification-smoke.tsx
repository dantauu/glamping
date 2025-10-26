
import CheckBoxCicle from '@/shared/ui/chekcboxes/checkbox-circle/checkbox-circle'
import style from './specification-smoke.module.scss'

const SpecificationsSmoke = () => {
	return (
		<div className={style.internetWrapper}>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Курение
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                            	Запрещено
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Разрешено в специально отведенных местах
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxCicle />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Разрешено
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

export default SpecificationsSmoke
