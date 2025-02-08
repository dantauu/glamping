"use client"
import React, { JSX, useState, useRef, useEffect } from 'react'
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
  const [visibleMonth, setVisibleMonth] = useState<number>(new Date().getMonth())
  const [months, setMonths] = useState<Date[]>([])
  const daysContainerRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const initialMonths = Array.from({ length: 12 }, (_, i) => 
      new Date(new Date().getFullYear(), i)
    )
    setMonths(initialMonths)
  }, [])

  useEffect(() => {
    if (!daysContainerRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const monthIndex = parseInt(entry.target.getAttribute('data-month') || '0')
            setVisibleMonth(monthIndex)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = daysContainerRef.current.querySelectorAll('.month-section')
    sections.forEach(section => observerRef.current?.observe(section))

    return () => observerRef.current?.disconnect()
  }, [months])

  const scrollToMonth = (monthIndex: number) => {
		const section = daysContainerRef.current?.querySelector(
			`[data-month="${monthIndex}"]`
		)
		if (section && daysContainerRef.current) {
			const container = daysContainerRef.current
			const sectionTop = section.getBoundingClientRect().top
			const containerTop = container.getBoundingClientRect().top

			container.scrollTo({
				top: container.scrollTop + (sectionTop - containerTop) - 50,
				behavior: 'smooth',
			})
		}
	}

  const handleDateClick = (date: Date) => {
    if (!selectedStartDate) {
      setSelectedStartDate(date)
      setSelectedEndDate(null)
    } else if (!selectedEndDate) {
      if (date >= selectedStartDate) {
        setSelectedEndDate(date)
        onSelectDateRange({ startDate: selectedStartDate, endDate: date })
      } else {
        setSelectedStartDate(date)
      }
    } else {
      setSelectedStartDate(date)
      setSelectedEndDate(null)
    }
  }

  const renderMonthDays = (month: Date) => {
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay()
    const startDay = (firstDay + 6) % 7
    const days: JSX.Element[] = []

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(month.getFullYear(), month.getMonth(), i)
      const isWeekend = [0, 6].includes(date.getDay())
      const isInRange = selectedStartDate && selectedEndDate && 
        date >= selectedStartDate && date <= selectedEndDate
      const isStart = selectedStartDate?.toDateString() === date.toDateString()
      const isEnd = selectedEndDate?.toDateString() === date.toDateString()

      let className = 'day'
      if (isWeekend) className += ' weekend'
      if (isInRange) className += ' selected-range'
      if (isStart) className += ' selected-start'
      if (isEnd) className += ' selected-end'

      days.push(
        <div
          key={i}
          className={className}
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
        {months.map((month, index) => {
          const monthName = month.toLocaleString('ru', { month: 'long' })
          return (
            <div
              key={index}
              className={`month ${visibleMonth === index && 'select-month'}`}
              onClick={() => scrollToMonth(index)}
            >
              {monthName.charAt(0).toUpperCase() + monthName.slice(1)}
            </div>
          )
        })}
      </div>

      <div className='calendar-content' ref={daysContainerRef}>
        <div className="fixed-header">
          <div className="weekdays">
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, i) => (
              <p key={i} className="weekday">{day}</p>
            ))}
          </div>
        </div>

        {months.map((month, index) => (
          <section 
            key={index}
            className="month-section"
            data-month={index}
          >
            <h2 className="month-header">
              {month.toLocaleString('ru', { 
                month: 'long',
                year: 'numeric'
              }).replace(' г.', '')}
            </h2>
            <div className="days-grid">
              {renderMonthDays(month)}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default CalendarModal