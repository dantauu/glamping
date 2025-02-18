import Link from 'next/link'
import style from './personal-data-extra.module.scss'
import InputSquare from '@/shared/ui/personal-account-ui/input-square/input-square'
import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'

const PersonalDataExtra = () => {
    return (
			<>
				<div className={style.authPersonalWrapper}>
					<div className={style.rightPart}>
						<div className={style.textWrapper}>
							<div className={style.arrowWrapper}>
								<Link
									href={'/extra-net-auth/recovery-password'}
									className={style.arrow}
								>
									<img src={'/assets/img/arrow-black.svg'} alt='' />
								</Link>
								<div className={style.title}>
									<h1 className={style.titleInner}>Регистрация</h1>
								</div>
							</div>
							<div className={style.descriptionCode}>
								<p className={style.descriptionInnerCode}>
									Введите Личные данные:
								</p>
							</div>
						</div>
						<div className={style.inputsWrapper}>
							<div className={style.inputSquare}>
								<div className={style.input}>
									<div className={style.inputInfoTitle}>
										<p className={style.inputInfoTitleInner}>
                                            Имя
                                        </p>
									</div>
									<div className={style.inputInfoTextWrapper}>
										<div className={style.inputInfo}>
											<input className={style.inputInner} type='text' />
										</div>
									</div>
								</div>
							</div>
							<div className={style.inputSquare}>
								<div className={style.input}>
									<div className={style.inputInfoTitle}>
										<p className={style.inputInfoTitleInner}>
                                            Фамилия
                                        </p>
									</div>
									<div className={style.inputInfoTextWrapper}>
										<div className={style.inputInfo}>
											<input className={style.inputInner} type='text' />
										</div>
									</div>
								</div>
							</div>
							<div className={style.inputSquare}>
								<div className={style.input}>
									<div className={style.inputInfoTitle}>
										<p className={style.inputInfoTitleInner}>
											Придумайте пароль
										</p>
									</div>
									<div className={style.wrapperIcon}>
										<div className={style.inputInfoTextWrapper}>
											<div className={style.inputInfo}>
												<input className={style.inputInnerIcon} type='password' />
											</div>
										</div>
										<div className={style.icon}>
											<img src={'/assets/img/ease.svg'} alt='' />
										</div>
									</div>
								</div>
                                <div className={style.text}>
									<p className={style.textInner}>
										Не менее 8 символов, включая буквы, цифры и символ
									</p>
								</div>
							</div>
							<div className={style.inputSquare}>
								<div className={style.input}>
									<div className={style.inputInfoTitle}>
										<p className={style.inputInfoTitleInner}>
											Повторите пароль
										</p>
									</div>
									<div className={style.wrapperIcon}>
										<div className={style.inputInfoTextWrapper}>
											<div className={style.inputInfo}>
												<input className={style.inputInnerIcon} type='password' />
											</div>
										</div>
										<div className={style.icon}>
											<img src={'/assets/img/off.svg'} alt='' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={style.personalData}>
							<div className=''>
								<CheckBoxSquare />
							</div>
							<div className=''>
								<p className={style.personalDataInner}>
									Я принимаю пользовательское соглашение и соглашаюсь на
									обработку персональных данных
								</p>
							</div>
						</div>
						<Link
							href={'/extra-net-auth/menager-extra'}
							className={style.button}
						>
							<button className={style.buttonInner}>Продолжить</button>
						</Link>
					</div>
				</div>
			</>
		)
}

export default PersonalDataExtra
