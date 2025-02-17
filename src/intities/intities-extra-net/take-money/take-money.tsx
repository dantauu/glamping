import { takeMoneyItems } from '../../../../public/data/data'
import style from './take-money.module.scss'

const TakeMoney = () => {
    return (
        <div className={style.takeMoneyWrapper}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Принимайте оплату на сайте 
                    <span className={style.span}> разными способами</span>
                </h1>
            </div>
            <div className={style.cardWrapper}>
                {takeMoneyItems.map((item, index) => (
                    <div key={index} className={style.cardItem}>
                        <div className={`
                            ${style.titleCard}
                            ${item.id === 2 && style.modifyWidth} `}>
                            <h2 className={style.titleCardInner}>
                                {item.title}
                            </h2>
                        </div>
                        <div className={style.description}>
                            <p className={style.descriptionInner}>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TakeMoney