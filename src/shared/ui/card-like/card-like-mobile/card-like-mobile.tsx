import { cardLikeItems } from '../../../../../public/data/data'
import style from './card-like-mobile.module.scss'

const CardLikeMobile = () => {

  return (
		<div className={style.cardLikeWrapper}>
			<div
				className={style.cardLikeSlider}>
				{cardLikeItems.map((item, index) => (
					<div
						key={index}
						className={style.cardLike}>
						<div className={style.mainImg}>
							<img className={style.mainImgInner} src={item.img} alt='' />
						</div>
						<div className={style.absoluteImg}>
							<img
								className={style.absoluteImgInner}
								src={item.absoluteImg}
								alt=''
							/>
						</div>
						<div className={style.cardLikeContentWrapper}>
							<div className={style.title}>
								<h3 className={style.titleInner}>{item.title}</h3>
							</div>
							<div className={style.description}>
								<p className={style.descriptionInner}>{item.description}</p>
							</div>
							<div className={style.priceWrapper}>
								<p className={style.priceNumberInner}>{item.price}р.</p>
								<p className={style.timePriceInner}>{item.timePrice}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CardLikeMobile