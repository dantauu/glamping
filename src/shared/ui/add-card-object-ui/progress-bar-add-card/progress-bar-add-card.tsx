// components/ProgressBarAddCard.tsx
'use client'

import { usePathname } from 'next/navigation'
import { STEPS, TOTAL_STEPS } from '@/config/step'
import style from './progress-bar-add-card.module.scss'

const ProgressBarAddCard = () => {
  const pathname = usePathname()
  const currentStepIndex = STEPS.findIndex(step => step === pathname)
  const progress = ((currentStepIndex + 1) / TOTAL_STEPS) * 100

  return (
    <div className={style.progressContainer}>
      <div className={style.progressBackground}>
        <div
          className={style.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBarAddCard