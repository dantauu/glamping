

import Link from 'next/link'
import style from './recovery-password-extra.module.scss'
import InputSquare from '@/shared/ui/personal-account-ui/input-square/input-square'

const RecoveryPasswordExtra = () => {
    return (
			<div className={style.authPersonalWrapper}>
				<div className={style.rightPart}>
					<div className={style.textWrapper}>
						<div className={style.arrowWrapper}>
							<Link
								href={'/extra-net-auth/register-mail-number'}
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
								Введите 4х значный код:
							</p>
						</div>
						<div className={style.description}>
							<p className={style.descriptionInner}>
								Мы отправили сообщение на{' '}
								<span className={style.bold}>+7 (999) 999-99-99</span>
							</p>
						</div>
					</div>
					<div className={style.inputSquareWrapper}>
						<div className={style.inputSquare}>
							<InputSquare />
						</div>
						<div className={style.inputSquare}>
							<InputSquare />
						</div>
						<div className={style.inputSquare}>
							<InputSquare />
						</div>
						<div className={style.inputSquare}>
							<InputSquare />
						</div>
					</div>
					<div className={style.personalData}>
						<p className={style.personalDataInner}>
							Запросить новый код можно через 0 сек.
						</p>
					</div>
					<Link href={'/extra-net-auth/personal-data'} className={style.button}>
						<button className={style.buttonInner}>Продолжить</button>
					</Link>
				</div>
			</div>
		)
}
export default RecoveryPasswordExtra