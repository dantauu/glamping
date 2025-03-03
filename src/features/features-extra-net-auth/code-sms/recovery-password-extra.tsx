'use client'

import Link from 'next/link'
import style from './recovery-password-extra.module.scss'
import InputSquare from '@/shared/ui/personal-account-ui/input-square/input-square'
import { useRef, useState } from 'react'

const CodeSms = () => {
const [code, setCode] = useState<string[]>(['', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null))

  const handleChange = (index: number, value: string) => {
    const newCode = [...code]
    newCode[index] = value.slice(-1) 
    setCode(newCode)
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }
    return (
			<div className={style.authPersonalWrapper}>
				<div className={style.rightPart}>
					<div className={style.textWrapper}>
						<div className={style.arrowWrapper}>
							<Link
								href={'/extra-net-auth/register-mail-number'}
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
      					{[0, 1, 2, 3].map((index) => (
        			<div key={index} className={style.inputSquare}>
          				<InputSquare
            			ref={(el) => {inputRefs.current[index] = el}}
            			value={code[index]}
            			onChange={(e) => handleChange(index, e.target.value)}
            			onKeyDown={(e) => handleKeyDown(index, e)}/>
        			</div>
      				))}
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
export default CodeSms