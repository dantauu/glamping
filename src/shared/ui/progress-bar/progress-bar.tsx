'use client'

import { useEffect, useState } from 'react'
import style from './progress-bar.module.scss'

interface ProgressBarProps {
	progress: number // 0-100
	color?: string
	width?: string
	height?: string
	className?: string
}

const ProgressBar = ({
	progress = 0,
	width = '312px',
	height = '8px',
	className = '',
	color = '#7EC964'
}: ProgressBarProps) => {
	const [validProgress, setValidProgress] = useState(0)

	useEffect(() => {
		setValidProgress(Math.min(100, Math.max(0, progress)))
	}, [progress])

	return (
		<div
			className={`${style.progressBarContainer} ${className}`}
			style={{ width: width, height: height, }}>
			<div
				className={style.progressBarFill}
				style={{ width: `${validProgress}%`,
				backgroundColor: color }}
			/>
		</div>
	)
}

export default ProgressBar
