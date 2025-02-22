'use client'

import InputSquare from "@/shared/ui/personal-account-ui/input-square/input-square"
import style from './confirm-number.module.scss'
import Link from "next/link"
import { useRef, useState } from "react"


const ConfirmNumber = () => {
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
            <div className={style.leftImg}>
                <img className={style.leftImgInner}
                 src={'/assets/img/auth-personal.jpg'} alt="" />
            </div>
            <div className={style.rightPart}>
             <div className={style.textWrapper}>
                <div className={style.arrowWrapper}>
                    <Link href={'/personal-account/auth-code'} className={style.arrow}>
                        <img src={'/assets/img/arrow-black.svg'} alt="" />
                    </Link>
                    <div className={style.title}>
                        <h1 className={style.titleInner}>
                            Подтвердите номер
                        </h1>
                    </div>
                </div>
                <div className={style.descriptionCode}>
                    <p className={style.descriptionInnerCode}>
                      Введите 4х значный код:
                    </p>
                </div>
                <div className={style.description}>
                    <p className={style.descriptionInner}>
                        Мы отправили сообщение на <span className={style.bold}>+7 (999) 999-99-99</span>
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
                <div className={style.button}>
                    <button className={style.buttonInner}>
                        Войти
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmNumber