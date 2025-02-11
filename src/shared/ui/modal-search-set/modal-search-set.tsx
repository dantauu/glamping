'use client'
import React, { useContext } from 'react'
import SliderLinear from '../chekcboxes/slider-linear/slider-linear'
import style from './modal-search-set.module.scss'
import { useModalSearch } from '@/providers/modal-search/modal-search'


const ModalSearchSet = () => {
	const { showSearchModal } = useModalSearch()
	return (
		<>
			{showSearchModal && (
				<div className={style.modalSearchSetWrapperFull}>
				<div className={style.modalSearchSetWrapper}>
					<div className={style.modalHeader}>
						<div className={style.modalTitile}>
							<h2 className={style.modalTitileInner}>Фильтры</h2>
						</div>
						<div className={style.modalHeaderRight}>
							<div className={style.buttonReset}>
								<button className={style.buttonResetInner}>
									Сбросить всё
								</button>
							</div>
							<div className={style.buttonShow}>
								<button className={style.buttonShowInner}>
									Показать 47 вариантов
								</button>
							</div>
						</div>
					</div>

					<div className={style.leftPartSetWrapper}>
						<div className={style.leftPartSet}>
							<div className={style.titleLeftPart}>
								<p className={style.titleLeftPartInner}>Цена поездки</p>
							</div>
							<div className={style.resetLeftPart}>
								<p className={style.resetLeftPartInner}>Сбросить</p>
							</div>
						</div>
						<SliderLinear />
					</div>
				</div>
				</div>
			)}
		</>
	)
}

export default ModalSearchSet
