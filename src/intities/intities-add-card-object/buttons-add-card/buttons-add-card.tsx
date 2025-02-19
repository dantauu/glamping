'use client'

import { useRouter, usePathname } from 'next/navigation'
import { STEPS, TOTAL_STEPS } from '@/config/step'
import style from './buttons.module.scss'

const ButtonsAddCard = () => {
  const router = useRouter()
  const pathname = usePathname()
  
  const currentStepIndex = STEPS.findIndex(step => step === pathname)
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === TOTAL_STEPS - 1

  const handleNext = () => {
    if (!isLastStep) {
      router.push(STEPS[currentStepIndex + 1])
    }
  }

  const handlePrev = () => {
    if (!isFirstStep) {
      router.push(STEPS[currentStepIndex - 1])
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
          {isLastStep ? 'Завершить' : 'Далее'}
        </button>
      </div>
    </div>
  )
}

export default ButtonsAddCard