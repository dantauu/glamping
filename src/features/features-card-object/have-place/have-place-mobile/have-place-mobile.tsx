'use client'

import InputInfo from '@/shared/ui/input-info/input-info'
import style from './have-place-mobile.module.scss'
import { useRef, useState } from 'react'
import CalendarModal from '@/features/features-home/calendar/calendar'
import InputInfoMobile from '@/shared/ui/input-info/input-info-mobile/input-info-mobile'

const HavePlaceMobile = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)
      const calendarRef = useRef<HTMLDivElement>(null)
      const [selectedRange, setSelectedRange] = useState<{
         startDate: Date | null
         endDate: Date | null
      } | null>(null)
   
      const handleOpenModal = () => {
         setIsModalOpen(true)
         console.log('modal open')
      }
   
      const handleCloseModal = () => {
         setIsModalOpen(false)
      }
   
      const handleSelectDateRange = (range: {
         startDate: Date | null
         endDate: Date | null
      }) => {
         setSelectedRange(range)
      }
   return (
      <div className={style.havePlaceMobileWrapper}>
         <div className={style.havePlaceTitleWrapper}>
            <div className={style.havePlaceTitle}>
               <p className={style.havePlaceTitleInner}>
                  Наличие мест
               </p>
            </div>
            <div className={style.havePlaceDescription}>
               <p className={style.havePlaceDescriptionInner}>
                  Изменить
               </p>
            </div>
         </div>
         <div className={style.blocksWrapper}>
         <InputInfoMobile
						inputInfoWrapper={style.inputInfoWrapperDate}
						inputInfoTextWrapper={style.inputInfoTextWrapper}
						inputInfo={style.inputInfo}
						inputInfoText={style.inputInfoText}
						text={
							selectedRange
								? `${selectedRange.startDate?.toLocaleDateString()} - ${selectedRange.endDate?.toLocaleDateString()}`
								: ''
						}
						inputInfoImg={style.inputInfoImg}
						inputInfoImgInner={style.inputInfoImgInner}
						img='/assets/img/calendar.svg'
						onClick={handleOpenModal}
					/>
               {isModalOpen && (
					<div ref={calendarRef} className={style.searchModalWrapper}>
						<CalendarModal
							setIsModalOpen={handleCloseModal}
							onSelectDateRange={handleSelectDateRange}
						/>
					</div>)}
               <div className={style.profileCount}>
                  <div className={style.profileCountImg}>
                     <img src={'/assets/img/user-mobile.svg'} alt="" />
                  </div>
                  <div className={style.profileCountText}>
                     <p className={style.profileCountTextInner}>
                        2 взр + 1 реб
                     </p>
                  </div>
               </div>
            </div>
      </div>
   )
}

export default HavePlaceMobile