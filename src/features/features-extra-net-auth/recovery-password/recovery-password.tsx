import Link from 'next/link'
import style from './recovery-password.module.scss'

const RecoveryPasswordExtra = () => {
    return (
			<div className={style.auth}>
				<div className={style.title}>
					<div className=''>
						<h1 className={style.titleInnerBold}>
                            Восстановление пароля
                        </h1>
					</div>
					<div className=''>
						<p className={style.titleInner}>
                            Введите E-mail или телефон
                        </p>
					</div>
				</div>
				<div className={style.inputsWrapper}>
					<div className={style.input}>
						<div className={style.inputInfoTitle}>
							<p className={style.inputInfoTitleInner}>
                                E-mail/ телефон
                            </p>
						</div>
						<div className={style.inputInfoTextWrapper}>
							<div className={style.inputInfo}>
								<input className={style.inputInner} type='text' />
							</div>
						</div>
					</div>
				</div>
				<Link href={'/extra-net-auth/recovery-ready'} className={style.button}>
					<button className={style.buttonInner}>
                        Сбросить пароль
                    </button>
				</Link>
				<div className={style.description}>
					<Link
						href={'/extra-net-auth/auth'}
						className={style.rightPart}
					>
						<p className={style.descriptionInnerRight}>
                            Вернуться ко входу
                        </p>
					</Link>
				</div>
			</div>
		)
}

export default RecoveryPasswordExtra