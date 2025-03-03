'use client'

import { useRenderNumberMail } from '@/providers/render-number-mail/render-number-mail'
import RenderButtons from '../render-buttons/render-buttons'
import style from './render-mail-number-reg.module.scss'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const RenderMailNumberReg = () => {
    const isMobile = useMediaQuery('(max-width: 1340px)')
    const { render } = useRenderNumberMail()
	return (
        <div className={style.overlay}>
        <div className={style.wrapper}>
		<div className={style.registerWrapperBack}>
			<div className={style.register}>
                {isMobile && (
                <Link href={'/extra-net'} className={style.krest}>
                    <img src={'/assets/img/krest.svg'} alt="" />
                </Link>
                )}
				<div className={style.title}>
					<h1 className={style.titleInner}>Регистрация</h1>
				</div>
				<RenderButtons />
                {render === 'Почта' ? (
                    <>
                    {isMobile ? (
                    <div className={style.input}>
					    <div className={style.inputInfoTextWrapper}>
						    <div className={style.inputInfo}>
							    <input placeholder='Почта' className={style.inputInner} type='text' />
						    </div>
					    </div>
				    </div>
                    ) : (
                    <div className={style.input}>
					    <div className={style.inputInfoTitle}>
						    <p className={style.inputInfoTitleInner}>Почта</p>
					    </div>
					    <div className={style.inputInfoTextWrapper}>
						    <div className={style.inputInfo}>
							    <input className={style.inputInner} type='text' />
						    </div>
					    </div>
				    </div>
                    )}
				<div className={style.button}>
					<button className={style.buttonInner}>Продолжить</button>
				</div>
				<div className={style.description}>
					<div className={style.leftPart}>
						<p className={style.descriptionInner}>Уже зарегистрированы?</p>
					</div>
					<Link href={'/extra-net-auth/auth'} className={style.rightPart}>
						<p className={style.descriptionInnerRight}>Войти</p>
					</Link>
				</div>
                </>
                ): (
                    <>
                    {isMobile ? (
                    <div className={style.input}>
                        <div className={style.inputInfoTextWrapper}>
                            <div className={style.inputInfo}>
                                <input placeholder='Телефон' className={style.inputInner} type="text" />
                            </div> 
                        </div>
                    </div>
                    ) : (
                    <div className={style.input}>
                        <div className={style.inputInfoTitle}>
                            <p className={style.inputInfoTitleInner}>
                                Телефон
                            </p>
                        </div>
                        <div className={style.inputInfoTextWrapper}>
                            <div className={style.inputInfo}>
                                <input className={style.inputInner} type="text" />
                            </div> 
                        </div>
                    </div>
                    )}
            <Link href={'/extra-net-auth/code-sms'} className={style.button}>
                <button className={style.buttonInner}>
                    Продолжить
                </button>
            </Link>
            <div className={style.description}>
                <div className={style.leftPart}>
                    <p className={style.descriptionInner}>
                        Уже зарегистрированы?
                    </p>
                </div>
                <Link href={'/extra-net-auth/auth'} className={style.rightPart}>
                    <p className={style.descriptionInnerRight}>
                        Войти
                    </p>
                </Link>
            </div>
            </>
                )}
			</div>
		</div>
        </div>
        </div>
	)
}

export default RenderMailNumberReg
