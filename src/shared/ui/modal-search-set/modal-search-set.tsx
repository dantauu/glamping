'use client'
import React, { useRef } from 'react'
import SliderLinear from '../chekcboxes/slider-linear/slider-linear'
import style from './modal-search-set.module.scss'
import { useModalSearch } from '@/providers/modal-search/modal-search'
import { ModalSearchDownItems, ModalSearchLocateItems, ModalSearchNumberItems, ModalSearchRaitingItems, ModalSearchServicesItems, ModalSearchSizesItems } from '../../../../public/data/data'
import CheckBoxSquare from '../chekcboxes/checkbox-square/checkbox-square'
import CheckBoxCicle from '../chekcboxes/checkbox-circle/checkbox-circle'
import CheckSwitch from '../chekcboxes/chek-switch/check-switch'
import { useClickOutside } from '@/hooks/useClickOutside'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'


const ModalSearchSet = () => {
	const isMobile = useMediaQuery('(max-width: 1260px)')
	const { showSearchModal, setShowSearchModal } = useModalSearch()
	const modalRef = useRef<HTMLDivElement>(null)
		useClickOutside(modalRef, () => {
			if (showSearchModal) {
				setShowSearchModal(false)
			}
		})
	return (
		<>
	<AnimatePresence>
		{showSearchModal && (
			<>
			<motion.div 
					className={style.modalSearchSetWrapperFull}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{duration: 0.4}}>
			<div onClick={() => setShowSearchModal(false)} 
			className={style.krestContainer}>
				<div className={style.krest}>
					<img className={style.krestImg} 
						src={'/assets/img/krest.svg'} alt="" />
				</div>
			</div>
				<div ref={modalRef} className={style.modalSearchSetWrapper}>
					<div className={style.modalHeaderWrapper}>
					 <div className={style.modalHeader}>
						{isMobile && (
							<div className={style.krestMobile}>
								<img src={'/assets/img/krest.svg'} alt="" />
							</div>
						)}
						{/* <div className={style.mobileWrapper}> */}
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
					</div>
					<div className={style.partsWrapper}>
					<div className={style.leftPartWrapper}>
						<div className={style.leftPartSet}>
							<div className={style.titleLeftPart}>
								<p className={style.titleLeftPartInner}>
									Цена поездки
								</p>
							</div>
							<div className={style.reset}>
								<button className={style.resetInner}>
									Сбросить
								</button>
							</div>
						</div>
						<div className={style.sliderMobile}>
							<SliderLinear />
						</div>
						<div className={style.itemsWrapper}>
							<div className={style.itemsText}>
								<div className={style.title}>
									<p className={style.titleInner}>
										Тип размещения
									</p>
								</div>
								<div className={style.reset}> 
									<button className={style.resetInner}>
										Сбросить
									</button>
								</div>
							</div>
							<div className={style.items}>
								{ModalSearchSizesItems.map((item, index) => (
									<div key={index} className={style.itemsInner}>
										<div className={style.checkBoxSquare}>
											<CheckBoxSquare />
										</div>
										<div className={style.text}>
											<p className={style.textInner}>
												{item.text}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					<div className={style.itemsWrapper}>
						<div className={style.itemsText}>
							<div className={style.title}>
								<p className={style.titleInner}>
									Рейтинг
								</p>
							</div>
							<div className={style.reset}> 
								<button className={style.resetInner}>
									Сбросить
								</button>
							</div>
						</div>
						<div className={style.items}>
							{ModalSearchRaitingItems.map((item, index) => (
								<div key={index} className={style.itemsInner}>
									<div className={style.checkBoxSquare}>
										<CheckBoxSquare />
									</div>
									<div className={style.text}>
										<p className={style.textInner}>
											{item.text}
										</p>
									</div>
								</div>
								))}
							</div>
						</div>
						<div className={style.itemsWrapper}>
						<div className={style.itemsText}>
							<div className={style.title}>
								<p className={style.titleInner}>
									Рейтинг
								</p>
							</div>
							<div className={style.reset}> 
								<button className={style.resetInner}>
									Сбросить
								</button>
							</div>
						</div>
						<div className={style.items}>
							{ModalSearchRaitingItems.map((item, index) => (
								<div key={index} className={style.itemsInner}>
									<div className={style.checkBoxSquare}>
										<CheckBoxCicle />
									</div>
									<div className={style.textModify}>
										<p className={style.textInner}>
											{item.text}
										</p>
									</div>
								</div>
								))}
							</div>
						</div>
						<div className={style.itemsWrapperSwitch}>
						<div className={style.items}>
							{ModalSearchDownItems.map((item, index) => (
								<div key={index} className={style.itemsInnerSwitch}>
									<div className={style.text}>
										<p className={style.textInnerSwitch}>
											{item.text}
										</p>
									</div>
									<div className={style.checkBoxSquare}>
										<CheckSwitch />
									</div>
								</div>
								))}
							</div>
						</div>
					</div>
					<div className={style.midlePartWrapper}>
						 <div className={style.itemsWrapper}>
						<div className={style.itemsText}>
							<div className={style.title}>
								<p className={style.titleInner}>
									Услуги в номере
								</p>
							</div>
							<div className={style.reset}> 
								<button className={style.resetInner}>
									Сбросить
								</button>
							</div>
						</div>
						<div className={style.items}>
							{ModalSearchNumberItems.map((item, index) => (
								<div key={index} className={style.itemsInnerNumbers}>
									<div className={style.checkBoxSquare}>
										<CheckBoxCicle />
									</div>
									<div className={style.numbersWrapper}>
										<div className={style.textModify}>
											<p className={style.textInner}>
												{item.text}
											</p>
										</div>
										<div className={style.textNumrs}>
											<p className={style.textNumrsInner}>
												{item.number}
											</p>
										</div>
									</div>
								</div>
								))}
							</div>
						</div>
						<div className={style.itemsWrapper}>
						<div className={style.itemsText}>
							<div className={style.title}>
								<p className={style.titleInner}>
									Местоположение
								</p>
							</div>
							<div className={style.reset}> 
								<button className={style.resetInner}>
									Сбросить
								</button>
							</div>
						</div>
						<div className={style.items}>
							{ModalSearchLocateItems.map((item, index) => (
								<div key={index} className={style.itemsInnerNumbers}>
									<div className={style.checkBoxSquare}>
										<CheckBoxCicle />
									</div>
									<div className={style.numbersWrapper}>
										<div className={style.textModify}>
											<p className={style.textInner}>
												{item.text}
											</p>
										</div>
										<div className="">
											<p className={style.textNumrsInner}>
												{item.number}
											</p>
										</div>
									</div>
								</div>
								))}
							</div>
						</div>
					</div>
					<div className={style.endPartWrapper}>
						<div className={style.itemsWrapper}>
						<div className={style.itemsText}>
							<div className={style.title}>
								<p className={style.titleInner}>
									Услуги на территории
								</p>
							</div>
							<div className={style.reset}> 
								<button className={style.resetInner}>
									Сбросить
								</button>
							</div>
						</div>
						<div className={style.items}>
							{ModalSearchServicesItems.map((item, index) => (
								<div key={index} className={style.itemsInnerNumbers}>
									<div className={style.checkBoxSquare}>
										<CheckBoxCicle />
									</div>
									<div className={style.numbersWrapper}>
										<div className={style.textModify}>
											<p className={style.textInner}>
												{item.text}
											</p>
										</div>
										<div className="">
											<p className={style.textNumrsInner}>
												{item.number}
											</p>
										</div>
									</div>
								</div>
								))}
							</div>
							</div>
						</div>
					</div>
				</div>
				</motion.div>
				</>
			)}	
			</AnimatePresence>
		</>
	)
}

export default ModalSearchSet
