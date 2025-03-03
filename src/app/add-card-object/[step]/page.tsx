'use client'

import { usePathname } from 'next/navigation'
import { STEPS } from '@/config/step'

export default function StepNumber() {
  const pathname = usePathname()
  const currentStep = STEPS.findIndex(step => step === pathname) + 1
  
  if (currentStep < 1 || currentStep > STEPS.length) {
    return null
  }

  return <span>{currentStep}.</span>
}