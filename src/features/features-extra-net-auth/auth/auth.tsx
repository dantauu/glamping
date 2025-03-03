import Link from 'next/link'
import style from './auth.module.scss'

const Auth = () => {
    return (
        <div className={style.overlay}>
        <div className={style.wrapper}>
			<div className={style.auth}>
				<div className={style.title}>
                    <div className="">
					    <h1 className={style.titleInner}>
                            Вход 
                        </h1>
                    </div>
                    <div className="">
                        <h1 className={style.titleInner}>
                            в личный кабинет 
                        </h1>
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
                    <div className={style.input}>
					    <div className={style.inputInfoTitle}>
						    <p className={style.inputInfoTitleInner}>
                                Пароль
                            </p>
					    </div>
					    <div className={style.inputInfoTextWrapper}>
						    <div className={style.inputInfo}>
							    <input className={style.inputInner} type='password' />
						    </div>
                            <div className="">
                                <img src={'/assets/img/off.svg'} alt="" />
                            </div>
					    </div>
                    </div>
                    <div className={style.forgotPasswordWrapper}>
                        <Link href={'/extra-net-auth/recovery-password'} className={style.forgotPassword}>
                            <p className={style.forgotPasswordText}>
                                Не помню пароль
                            </p>
                        </Link>
                    </div>
				</div>
				<Link href={'/extra-net-lk/my-object'} className={style.button}>
					<button className={style.buttonInner}>
                        Войти
                    </button>
				</Link>
				<div className={style.description}>
					<div className={style.leftPart}>
						<p className={style.descriptionInner}>
                            У вас нет аккаунта? —
                        </p>
					</div>
					<Link href={'/extra-net-auth/register-mail-number'} 
                    className={style.rightPart}>
						<p className={style.descriptionInnerRight}>
                            Зарегистрирроваться
                        </p>
					</Link>
				</div>
            </div>
            </div>
            </div>
    )
}

export default Auth