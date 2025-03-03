'use client'

import Link from 'next/link'
import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './personal-data-extra.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const PersonalDataExtra = () => {
	const isMobile = useMediaQuery('(max-width: 1340px)')
    return (
			<>
				<div className={style.authPersonalWrapper}>
					<div className={style.rightPart}>
						<div className={style.textWrapper}>
							<div className={style.arrowWrapper}>
								<Link
									href={'/extra-net-auth/code-sms'}
									className={style.arrow}
								>
									<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 7L2 7M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke-width="2" stroke-linecap="round"/>
									</svg>
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
								{isMobile ? (
								<div className={style.input}>
									<div className={style.inputInfoTextWrapper}>
										<div className={style.inputInfo}>
											<input placeholder='Имя'
											 className={style.inputInner} type='text' />
										</div>
									</div>
								</div>
								) : (
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
								)}
							</div>
							<div className={style.inputSquare}>
								{isMobile ? (
								<div className={style.input}>
									<div className={style.inputInfoTextWrapper}>
										<div className={style.inputInfo}>
											<input placeholder='Фамилия' className={style.inputInner} type='text' />
										</div>
									</div>
								</div>
								) : (
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
								)}
							</div>
							<div className={style.inputSquare}>
								{isMobile ? (
								<div className={style.input}>
									<div className={style.wrapperIcon}>
										<div className={style.inputInfoTextWrapper}>
											<div className={style.inputInfo}>
												<input placeholder='Придумайте пароль' className={style.inputInnerIcon} type='password' />
											</div>
										</div>
										<div className={style.icon}>
											<img src={'/assets/img/ease.svg'} alt='' />
										</div>
									</div>
								</div>
								) : (
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
								)}
                        <div className={style.text}>
									<p className={style.textInner}>
										Не менее 8 символов, включая буквы, цифры и символ
									</p>
								</div>
							</div>
							<div className={style.inputSquare}>
								{isMobile ? (
								<div className={style.input}>
									<div className={style.wrapperIcon}>
										<div className={style.inputInfoTextWrapper}>
											<div className={style.inputInfo}>
												<input placeholder='Повторите пароль' className={style.inputInnerIcon} type='password' />
											</div>
										</div>
										<div className={style.icon}>
											<img src={'/assets/img/off.svg'} alt='' />
										</div>
									</div>
								</div>
								) : (
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
								)}
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
