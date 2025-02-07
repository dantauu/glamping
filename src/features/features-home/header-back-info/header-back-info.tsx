"use client"

import InputInfo from '@/shared/ui/input-info/input-info'
import style from './header-back-info.module.scss'
import Button from '@/shared/ui/button/button'
import ButtonLocation from '@/shared/ui/button-location/button-location'
import { useRef, useState } from 'react'
import CalendarModal from '../calendar/calendar'
import { useClickOutside } from '@/hooks/useClickOutside'


const HeaderBackInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const calendarRef = useRef<any>(null)
	const [selectedRange, setSelectedRange] = useState<{
		startDate: Date | null
			endDate: Date | null
		} | null>(null)

    const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectDateRange = (range: { startDate: Date | null; endDate: Date | null }) => {
    setSelectedRange(range);
  };

  useClickOutside(calendarRef, () => {
    if (isModalOpen) {
        setIsModalOpen(false)
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
							text='Краснодраский край, Россия'
							inputInfoImg={style.inputInfoImg}
							inputInfoImgInner={style.inputInfoImgInner}
							img='/assets/img/icon-arrow.svg'
							// onClick={}
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
							inputInfoImg={style.inputInfoImg}
							inputInfoImgInner={style.inputInfoImgInner}
							img='/assets/img/icon-arrow.svg'
							// onClick={}
						/>
						<Button text='Найти' />
					</div>
					<div className={style.inputInfoBtnWrapper}>
						<ButtonLocation text='Респ. Карелия' />
						<ButtonLocation text='Тюменский район' />
						<ButtonLocation text='Сочи' />
					</div>
					{isModalOpen && (
						<div ref={calendarRef} className=''>
							<CalendarModal
								onClose={handleCloseModal}
								onSelectDateRange={handleSelectDateRange}
							/>
						</div>
					)}
				</div>
			</div>
		)
}

export default HeaderBackInfo