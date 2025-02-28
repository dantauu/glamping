"use client"

import InputInfo from '@/shared/ui/input-info/input-info'
import style from './header-back-info.module.scss'
import Button from '@/shared/ui/button/button'
import ButtonLocation from '@/shared/ui/button-location/button-location'
import { useRef, useState } from 'react'
import CalendarModal from '../calendar/calendar'
import { useClickOutside } from '@/hooks/useClickOutside'
import ModalLocation from '@/intities/intities-home/header-modal/modal-location/modal-location'
import ModalCountHuman from '@/intities/intities-home/header-modal/modal-count-human/modal-count-human'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import HeaderSearchMobile from '../header-search-mobile/header-search-mobile'


const HeaderBackInfo = () => {
	const isMobile = useMediaQuery('(max-width: 1100px)')
	const [searchMobile, setSearchMobile] = useState<boolean>(false)
	const [selectedLocate, setSelectedLocate] = useState<string>('Краснодраский край, Россия')
	const [showLocation, setShowLocation] = useState<boolean>(false)
	const [showCountHuman, setShowCountHuman] = useState<boolean>(false)
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const calendarRef = useRef<HTMLDivElement>(null)
	const locationRef = useRef<HTMLDivElement>(null)
	const countHumanRef = useRef<HTMLDivElement>(null)
	const [selectedRange, setSelectedRange] = useState<{
		startDate: Date | null
			endDate: Date | null
		} | null>(null)

	const handleOpenModal = () => {setIsModalOpen(true)};
	const handleCloseModal = () => {setIsModalOpen(false)};

  const handleSelectDateRange = (range: { startDate: Date | null; endDate: Date | null }) => {
    setSelectedRange(range);
  };

  useClickOutside(calendarRef, () => {
    if (isModalOpen) {
        setIsModalOpen(false)
    }
  })
  useClickOutside(locationRef, () => {
	if (showLocation) {
		setShowLocation(false)
	}
  })
  useClickOutside(countHumanRef, () => {
	if (showCountHuman) {
		setShowCountHuman(false)
	}
  })


    return (
			<div className={style.infoWrapper}>
				<div className={style.infoInner}>
					<div className={style.infoTitle}>
						<h1 className={style.infoInnerTitleText}>
							Глэмпинги и эко-отели: бронируй онлайн, отдыхай с комфортом
						</h1>
					</div>
					<div className={style.infoInputWrapper}>
						<InputInfo
							inputInfoWrapper={style.inputInfoWrapperPoint}
							inputInfoTitle={style.inputInfoTitle}
							title='Куда вы хотите поехать ?'
							inputInfoTitleInner={style.inputInfoTitleInner}
							inputInfoTextWrapper={style.inputInfoTextWrapper}
							inputInfo={style.inputInfo}
							inputInfoText={style.inputInfoText}
							text={selectedLocate}
							inputInfoImg={`
								${style.inputInfoImg}
								${showLocation && style.rotate} `}
							inputInfoImgInner={style.inputInfoImgInner}
							img='/assets/img/iconArrow.svg'
							onClick={() => {
								if (isMobile) {
									setSearchMobile(true)
								} else
								setShowLocation(true)}}
						/>
						<InputInfo
							inputInfoWrapper={style.inputInfoWrapperDate}
							inputInfoTitle={style.inputInfoTitle}
							title='Даты проживания'
							inputInfoTitleInner={style.inputInfoTitleInner}
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
						<InputInfo
							inputInfoWrapper={style.inputInfoWrapperHoo}
							inputInfoTitle={style.inputInfoTitle}
							title='Кто едет'
							inputInfoTitleInner={style.inputInfoTitleInner}
							inputInfoTextWrapper={style.inputInfoTextWrapper}
							inputInfo={style.inputInfo}
							inputInfoText={style.inputInfoText}
							text='2 взрослых'
							inputInfoImg={`
								${style.inputInfoImg} 
								${showCountHuman && style.rotate}`}
							inputInfoImgInner={style.inputInfoImgInner}
							img='/assets/img/iconArrow.svg'
							onClick={() => {setShowCountHuman(true)}}
						/>
						<Button wrapperClass={style.buttonSearch} text='Найти' />
					</div>
					<div className={style.inputInfoBtnWrapper}>
						<ButtonLocation 
							wrapper={style.wrapperButton}
							buttonText={style.buttonText}
							text='Респ. Карелия' />
						<ButtonLocation 
							wrapper={style.wrapperButton}
							buttonText={style.buttonText}
							text='Тюменский район' />
						<ButtonLocation
						 	wrapper={style.wrapperButton}
							buttonText={style.buttonText}
						 	text='Сочи' />
					</div>
					{isModalOpen && (
						<div ref={calendarRef} className=''>
							<CalendarModal
								onSelectDateRange={handleSelectDateRange}
								setIsModalOpen={setIsModalOpen}
							/>
						</div>)}
					{showLocation && (
						<div ref={locationRef} className="">
							<ModalLocation 
								selectedLocate={selectedLocate}
								setSelectedLocate={setSelectedLocate}
								onClose={setShowLocation} />
						</div>
					)}
					{showCountHuman && (
						<div ref={countHumanRef} className="">
							<ModalCountHuman onClose={setShowCountHuman} />
						</div>
					)}
					{searchMobile && (
						<HeaderSearchMobile setSearchMobile={setSearchMobile} />
					)}
				</div>
			</div>
		)
}

export default HeaderBackInfo