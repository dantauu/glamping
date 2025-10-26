import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './kitchen.module.scss'

const Kitchen = () => {
    return (
       <div className={style.internetWrapper}>
        <div className={style.titleWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    2. Удобства в номере
                </h1>
            </div>
            <div className={style.description}>
                <p className={style.descriptionInner}>
                    Отметьте основные характеристики:
                </p>
            </div>
        </div>
			<div className={style.wrapperCheckTitle}>
				<div className={style.titleCheck}>
					<h2 className={style.titleCheckInner}>
                        Кухня
                    </h2>
				</div>
				<div className={style.wrapperCheck}>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                            	Холодильник
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Варочная поверхность
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Микроволновая печь
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Чай / кофе
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Электрический чайник
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Набор посуды
                            </p>
						</div>
					</div>
					<div className={style.checkItem}>
						<div className={style.check}>
							<CheckBoxSquare />
						</div>
						<div className={style.text}>
							<p className={style.textInner}>
                                Обеденные стол и стулья
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

export default Kitchen