import { advantagesItems } from '../../../../public/data/data'
import style from './advantages-card.module.scss'

const AdvantagesCard = () => {
    return (
			<div className={style.advantagesWrapper}>
				{advantagesItems.map((item, index) => (
					<div className={style.advantagesCard}></div>
				))}
			</div>
		)
}

export default AdvantagesCard