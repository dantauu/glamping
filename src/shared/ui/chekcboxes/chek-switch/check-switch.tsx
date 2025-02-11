'use client'
import { useState } from 'react'
import style from './check-switch.module.scss'

const CheckSwitch = () => {
	const [checked, setChecked] = useState(false)
	const handleChecked = () => setChecked(prev => !prev)
	return (
		<label className={style.toggleSwitch}>
			<input onChange={handleChecked} checked={checked} type='checkbox' />
			<div className={style.toggleSwitchBackground}>
				<div className={style.toggleSwitchHandle}></div>
			</div>
		</label>
	)
}

export default CheckSwitch
