'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import style from './advantages-employee.module.scss'
import AdvantagesEmployeeMobile from './advantages-employee-mobile/advantages-employee-mobile'

const AdvantagesEmployee = () => {
const isMobile = useMediaQuery('(max-width: 1145px)')
  return (
	<>
	{isMobile ? <AdvantagesEmployeeMobile /> : (
		<div className={style.mainWrapper}>
			<div className={style.advantagesEmployeeWrapper}>
				<img className={style.img} src={'/assets/img/phone.png'} alt='' />
				<div className={style.rightPart}>
					<div className={style.title}>
						<div className="">
							<h1 className={style.titleInner}>
								Преимущества 
							</h1>
						</div>
						<div className={style.titleNext}>
							<h1 className={style.titleInnerNext}>
								для сотрудничества:
							</h1>
						</div>
					</div>
					<div className="">
						<img className={style.vector} 
						src={'assets/img/vector-1.svg'} alt="" />
					</div>
					<div className={style.elips}>
						<img src={'/assets/img/elips.svg'} alt="" />
					</div>
					<div className={style.wrapperScroll}>
						<div className={style.advantagesItem}>
							<div className={style.titleItem}>
								<h2 className={style.titleItemInner}>
									Повышение узнаваемости
								</h2>
							</div>
							<div className={style.description}>
								<p className={style.descriptionInner}>
									Ваш объект станет доступным для широкой аудитории
									пользователей сайта, включая туристов из других регионов и
									стран.
								</p>
							</div>
						</div>
						<div className={style.vectorThree}>
							<img src={'assets/img/vector-3.svg'} alt="" />	
						</div>
						<div className={style.elipsTwo}>
							<img src={'assets/img/elips.svg'} alt="" />
						</div>
						<div className={style.advantagesItem}>
							<div className={style.titleItem}>
								<h2 className={style.titleItemInner}>
									Есть инструменты для продвижения
								</h2>
							</div>
							<div className={style.description}>
								<p className={style.descriptionInner}>
									Подключив дополнительные услуги, вы сможете продвигаться в
									поиске и увеличивать число просмотров.
								</p>
							</div>
						</div>
						<div className={style.advantagesItem}>
							<div className={style.titleItem}>
								<h2 className={style.titleItemInner}>
									Комфортное бронирование
								</h2>
							</div>
							<div className={style.description}>
								<p className={style.descriptionInner}>
									Предоставление клиентам современного и удобного сервиса
									бронирования.
								</p>
							</div>
						</div>
						<div className={style.advantagesItem}>
							<div className={style.titleItem}>
								<h2 className={`${style.titleItemInner} 
									${style.modifyPad}`}>
									Настройка условий и тарифов
								</h2>
							</div>
							<div className={style.description}>
								<p className={style.descriptionInner}>
									В личном кабинете напрямую или через менеджер каналов, Вы
									сможете управлять процессом бронирования, тарифами и условиями
									оплаты.
								</p>
							</div>
						</div>
						<div className={style.vectorTwo}>
							<img src={'assets/img/vector-2.svg'} alt="" />
						</div>
						<div className={style.elipsThree}>
							<img src={'/assets/img/elips.svg'} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)}
		</>
	)
}

export default AdvantagesEmployee
