import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './street.module.scss'

const Street = () => {
    return (
       <div className={style.streetWrapper}>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        На улице
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                            	Терраса
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Обеденная зона
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Мангал
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Гамак
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Закрытая беседка
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

export default Street