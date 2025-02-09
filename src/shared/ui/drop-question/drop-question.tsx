'use client'
import { useState } from 'react'
import { questText } from '../../../../public/data/data'
import style from './drop-question.module.scss'

const DropQuestion = ({ title }: { title: string }) => {
     const [showQuestion, setShowQuestion] = useState<boolean>(false)
    return (
			<div className={style.dropQurstionWrapper}>
				<div className={style.dropQuestion}>
					<div className={style.title}>
						<h3 className={style.titleInner}>{title}</h3>
					</div>
					<div
						onClick={() => setShowQuestion(prev => !prev)}
						className={`${style.img} ${showQuestion && 
                            style.imgActive}`}
					>
						<svg
							width='14'
							height='9'
							viewBox='0 0 14 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13 1.9375L7.70711 7.23039C7.31658 7.62092 6.68342 7.62092 6.29289 7.23039L1 1.9375'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					</div>
				</div>
				<div className={style.textWrapper}>
					{showQuestion && (
						<>
							{questText.map((item, inedx) => (
								<div key={inedx} className={style.textOne}>
									<p className={style.textInner}>{item.text}</p>
								</div>
							))}
						</>
					)}
				</div>
			</div>
		)
}
export default DropQuestion