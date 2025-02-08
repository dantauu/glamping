"use client"
import React, { JSX, useState } from 'react'
import './calendar.scss'

type DateRange = {
	startDate: Date | null
	endDate: Date | null
}

const CalendarModal: React.FC<{
	onClose: () => void
	onSelectDateRange: (range: DateRange) => void
}> = ({ onSelectDateRange }) => {
	const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
	const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
	const [selectedMonth, setSelectedMonth] = useState<Date>(new Date())

	const handleDateClick = (date: Date) => {
		if (!selectedStartDate) {
			setSelectedStartDate(date)
		} else if (!selectedEndDate) {
			setSelectedEndDate(date)
			onSelectDateRange({ startDate: selectedStartDate, endDate: date })
		}
	}
	const renderDays = () => {
		const daysInMonth = new Date(
			selectedMonth.getFullYear(),
			selectedMonth.getMonth() + 1, 0).getDate()
		const days: JSX.Element[] = []
		for (let i = 1; i <= daysInMonth; i++) {
			const date = new Date(
				selectedMonth.getFullYear(),
				selectedMonth.getMonth(),
				i
			)
			let className = 'day'
			if (
				selectedStartDate &&
				selectedEndDate &&
				date >= selectedStartDate &&
				date <= selectedEndDate
			) {
				className += ' selected-range'
			}
			if (
				selectedStartDate &&
				date.toDateString() === selectedStartDate.toDateString()
			) {
				className += ' selected-start'
			}
			if (
				selectedEndDate &&
				date.toDateString() === selectedEndDate.toDateString()
			) {
				className += ' selected-end'
			}
			days.push(
				<div
					key={i}
					className={`${className} ${selectedStartDate === date && 'selected'}`}
					onClick={() => handleDateClick(date)}
				>
					{i}
				</div>
			)
		}
		return days
	}

	return (
		<div className='calendar-modal'>
			<div className='months-list'>
				{Array.from({ length: 12 }).map((_, index) => {
					const month = new Date(selectedMonth.getFullYear(), index)
                    const monthName = month.toLocaleString('default', { month: 'long' })
                    const isSelected = selectedMonth.getMonth() === index
					return (
						<div
							key={index}
							onClick={() => setSelectedMonth(month)}
							className={`month ${isSelected && 'select-month'}`}
						>
							{monthName.charAt(0).toUpperCase() + monthName.slice(1)}
						</div>
					)
				})}
			</div>
			<div className='days-list'>{renderDays()}</div>
		</div>
	)
}

export default CalendarModal
