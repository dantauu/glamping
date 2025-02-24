'use client'

import { usePathname } from 'next/navigation'
import { STEPS_NUMBER, TOTAL_STEPS_NUMBER } from '@/config/add-number-step'
import style from './progress-bar-add-number.module.scss'

const ProgressBarAddNumber = () => {
  const pathname = usePathname()
  const currentStepIndex = STEPS_NUMBER.findIndex(step => step === pathname)
  const progress = ((currentStepIndex + 1) / TOTAL_STEPS_NUMBER) * 100

  return (
    <div className={style.progressContainer}>
      <div className={style.progressBackground}>
        <div
          className={style.progressFill}
          style={{ width: `${progress}%` }}
        />
        <div className={style.segmentMarkers} />
      </div>
    </div>
  )
}

export default ProgressBarAddNumber