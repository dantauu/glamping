import style from './advantages-card.module.scss'

const AdvantagesCard = ({
	title,
	description,
	img,
	blockImg,
	shadowGreen,
	shadowBrown,
}: {
	title: string
	description: string
	img: string
	blockImg?: string
	shadowGreen?: string
	shadowBrown?: string
}) => {
	return (
		<div className={style.advantagesCardWrapper}>
			<div className={style.advantagesCard}>
				<div className={style.textWrapper}>
					<div className={style.title}>
						<h2 className={style.titleInner}>{title}</h2>
					</div>
					<div className={style.description}>
						<p className={style.descriptionInner}>{description}</p>
					</div>
				</div>
				<div
					className={`${style.img} ${blockImg}`}
				>
					<img className={`${style.imgInner} ${shadowGreen} ${shadowBrown}`} src={img} alt='' />
				</div>
			</div>
		</div>
	)
}

export default AdvantagesCard