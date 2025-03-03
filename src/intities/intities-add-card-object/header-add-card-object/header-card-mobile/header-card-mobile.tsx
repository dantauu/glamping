'use client'

import StepNumber from "@/app/add-card-object/[step]/page"
import style from './header-card-mobile.module.scss'
import { STEPS } from "@/config/step"
import { useRouter, usePathname } from "next/navigation"

const HeaderCardMobile = () => {
   const router = useRouter()
   const pathname = usePathname()
   const currentStepIndex = STEPS.findIndex(step => step === pathname)
   const isFirstStep = currentStepIndex === 0
   const handlePrev = () => {
       if (!isFirstStep) {
         router.push(STEPS[currentStepIndex - 1])
       }
     }
   return (
      <div className={style.headerMobileCardWrapper}>
         <div onClick={handlePrev} className={style.arrow}>
            <img src={'/assets/img/arrow-slide.svg'} alt="" />
         </div>
         <div className={style.title}>
            <p className={style.titleInner}>
               <StepNumber /> {currentStepIndex < 6 ? 'Регистрация объекта' : 
               'Добавить номер'} 
            </p>
         </div>
      </div>
   )
}

export default HeaderCardMobile