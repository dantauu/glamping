import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './fun-sport.module.scss'

const FunSport = () => {
	return (
		<div className={style.funSportWrapper}>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Развлечения и спорт
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Бассейн
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Вечерняя программа
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Йога
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Кинотеатр под открытым небом
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Книги и журналы
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Мастер-классы
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Медитации
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                            	Настольные игры
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                            	Рыбалка
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                            	Спортивный инвентарь
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

export default FunSport
