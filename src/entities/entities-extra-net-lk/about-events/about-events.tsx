
import { sliderCardObjectItems } from '../../../../public/data/data'
import style from './about-events.module.scss'

const AboutEvents = () => {
	return (
		<div className={style.sliderWrapper}>
            <div className={style.titleWrapper}>
			    <div className={style.mainTitle}>
					<h1 className={style.mainTitleInner}>
						Ближайшие события
					</h1>
				</div>
                <div className={style.mainDescription}>
                    <p className={style.mainDescriptionInner}>
                        (максимум - 6 анонсов)
                    </p>
                </div>
            </div>
			<div className={style.itemSlider}>
				{sliderCardObjectItems.map((item, index) => (
					<div
						key={index}
						className={style.cardLike}>
						<div className={style.mainImg}>
							<img className={style.mainImgInner} src={item.img} alt='' />
						</div>
						<div className={style.calendarWrapper}>
							<div className={style.calendarIcon}>
								<img src={item.iconCalendar} alt='' />
							</div>
							<div className={style.calendarText}>
								<p className={style.calendarTextInner}>
									{item.dateText}
								</p>
							</div>
						</div>
						<div className={style.cardLikeContentWrapper}>
							<div className={style.title}>
								<h3 className={style.titleInner}>{item.title}</h3>
							</div>
							<div className={style.description}>
								<p className={style.descriptionInner}>{item.description}</p>
							</div>
						</div>
                        <div className={style.iconsWrapper}>
                            <div className={style.icon}>
                                <img src={'/assets/img/pencel.svg'} alt="" />
                            </div>
                            <div className={style.icon}>
                                <img src={'/assets/img/krest-or.svg'} alt="" />
                            </div>
                        </div>
					</div>
				))}
			</div>
            <div className={style.buttonWrapper}>
                <div className={style.buttonImg}>
                    <img src={'/assets/img/plus-black.svg'} alt="" />
                </div>
                <div className={style.button}>
                    <button className={style.buttonInner}>
                        Добавить событие
                    </button>
                </div>
            </div>
		</div>
	)
}

export default AboutEvents
