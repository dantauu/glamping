import { cardSizeItems } from '../../../../public/data/data'
import style from './cards.module.scss'

const Cards = () => {
    return (
        <div className={style.cardsWrapper}>
            <div className={style.title}>
                <h2 className={style.titleInner}>
                    Тип размещения*
                </h2>
            </div>
            <div className={style.wrapperCards}>
                {cardSizeItems.map((item, index) => (
                    <div key={index} className={style.itemCard}>
                        <div className={style.img}>
                            <img src={item.img} alt="" />
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
    )
}

export default Cards