'use client'

import Button from '@/shared/ui/button/button'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'
import InputInfo from '@/shared/ui/input-info/input-info'
import CalendarModal from '@/features/features-home/calendar/calendar'
import style from './have-place.module.scss'

const HavePlace = () => {
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

	useClickOutside(calendarRef, () => {
		if (isModalOpen) {
			setIsModalOpen(false)
		}
	})
	return (
		<div className={style.infoWrapper}>
			<div className={style.infoInner}>
				<div className={style.infoInputWrapper}>
                    <div className={style.havePlaceText}>
                        <h2 className={style.havePlaceTextInner}>
                            Наличие мест
                        </h2>
                    </div>
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
						inputInfoImg={style.inputInfoImg}
						inputInfoImgInner={style.inputInfoImgInner}
						img='/assets/img/iconArrow.svg'
						onClick={() => {}}
					/>
					<Button 
                        wrapperClass={style.wrapperButton}
                        classButton={style.button}
                        text='Изменить параметра поиска' />
				</div>
				{isModalOpen && (
					<div ref={calendarRef} className={style.searchModalWrapper}>
						<CalendarModal
							setIsModalOpen={handleCloseModal}
							onSelectDateRange={handleSelectDateRange}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default HavePlace
