'use client'

import style from './advantages-employee.module.scss'

const AdvantagesEmployee = () => {
    



	return (
		<div className={style.advantagesEmployeeWrapper}>
			<div className={style.leftPart}>
				<img className={style.img} src={'/assets/img/phone.png'} alt='' />
			</div>
			<div className={style.rightPart}>
				<div className={style.title}>
					<h1 className={style.titleInner}>Преимущества для сотрудничества:</h1>
				</div>
				<div className={style.wrapperScroll} >
					<div className={style.scroll}>
						<div className={style.advantagesItem}>
							<div className={style.titleItem}>
								<h2 className={style.titleItemInner}>Повышение узнаваемости</h2>
							</div>
							<div className={style.description}>
								<p className={style.descriptionInner}>
									Ваш объект станет доступным для широкой аудитории
									пользователей сайта, включая туристов из других регионов и
									стран.
								</p>
							</div>
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
								<h2 className={style.titleItemInner}>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdvantagesEmployee