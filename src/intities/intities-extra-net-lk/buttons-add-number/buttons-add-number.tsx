'use client'

import { useRouter, usePathname } from 'next/navigation'
import { STEPS_NUMBER, TOTAL_STEPS_NUMBER } from '@/config/add-number-step'
import style from './buttons-add-number.module.scss'

const ButtonsAddNumber = () => {
  const router = useRouter()
  const pathname = usePathname()
  
  const currentStepIndex = STEPS_NUMBER.findIndex(step => step === pathname)
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === TOTAL_STEPS_NUMBER - 1

  const handleNext = () => {
    if (!isLastStep) {
      router.push(STEPS_NUMBER[currentStepIndex + 1])
    }
  }

  const handlePrev = () => {
    if (!isFirstStep) {
      router.push(STEPS_NUMBER[currentStepIndex - 1])
    }
  }

  return (
    <div className={style.buttonsWrapper}>
      <div className={style.button}>
        <button 
          className={`${style.buttonInner} ${style.exit}`}
          onClick={handlePrev}
          disabled={isFirstStep}
        >
          Назад
        </button>
      </div>
      <div className={style.button}>
        <button 
          className={style.buttonInner}
          onClick={handleNext}
          disabled={isLastStep}
        >
          {isLastStep ? 'Сохранить' : 'Продолжить'}
        </button>
      </div>
    </div>
  )
}

export default ButtonsAddNumber