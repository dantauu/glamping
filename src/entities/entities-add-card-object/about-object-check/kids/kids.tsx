import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './kids.module.scss'

const Kids = () => {
	return (
		<div className={style.kidsWrapper}>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Отдых с детьми
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Детская площадка
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Детское меню
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Детская кроватка/люлька
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Детская кроватка/люлька (по запросу)
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

export default Kids
