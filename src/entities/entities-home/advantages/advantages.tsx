import AdvantagesCard from "@/shared/ui/advantages-card/advantages-card"
import style from './advantages.module.scss'


const Advantages = () => {
    return (
			<div className={style.advantages}>
				<div className={style.advantagesBtn}>
					<p className={style.buttonInner}>Преимущества</p>
				</div>
				<div className={style.advantagesCardsWrapper}>
					<div className={style.advantagesCardsWrapperEnd}>
						<AdvantagesCard
							title='Удобный поиск'
							description='Выбирайте куда отправиться, читайте отзывы, добавляйте в избранное.'
							img={'/assets/img/key.png'}
							shadowGreen={style.shadowGreen}
							wrapperClass={style.cardItemWrapper}
							blockImg={style.mobileModifyGreen}
						/>
						<AdvantagesCard
							title='Широкий выбор'
							description='Более 400 вариантов размещения в России и странах СНГ.'
							img={'/assets/img/house.png'}
							shadowBrown={style.shadowBrown}
							wrapperClass={style.cardItemWrapper}
							blockImg={style.mobileModify}
						/>
					</div>
					<div className={style.advantagesCardsWrapperStart}>
						<AdvantagesCard
							title='Низкие цены'
							description='Мы работаем напрямую с владельцами глэмпингов и эко-отелей.'
							img={'/assets/img/point.png'}
							shadowBrown={style.shadowBrown}
							wrapperClass={style.cardItemWrapper}
							blockImg={style.mobileModifyPrice}
						/>
						<AdvantagesCard
							title='Безопасная оплата'
							description='Мы используем передовые технологии шифрования для защиты ваших данных.'
							img={'/assets/img/block.png'}
							blockImg={style.blockImg}
							shadowBrown={style.shadowBrown}
							wrapperClass={style.cardItemWrapper}
						/>
					</div>
				</div>
				<div className={style.line}>
					<img
						className={style.lineInner}
						src={'/assets/img/line.svg'}
						alt=''
					/>
				</div>
			</div>
		)
}

export default Advantages