import Link from 'next/link'
import style from './button-card-object.module.scss'
import React from 'react'
import { ButtonCardObject as ButtonCardObjectType } from '@/app/types/global'




const ButtonCardObject = ({ text, buttonItem, link }: ButtonCardObjectType) => {
	return (
		<Link href={link} className={style.buttonWrapper}>
			<button className={`${style.buttonItem} ${buttonItem}`}>
				{text}
			</button>
		</Link>
	)
}

export default ButtonCardObject