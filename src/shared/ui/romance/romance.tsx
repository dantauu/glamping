import { romanceItems } from '../../../../public/data/data'
import style from './romance.module.scss'

const Romance = () => {
    return (
       <div className={style.romanceScroll}>
        <div className={style.romanceWrapper}>
            {romanceItems.map((item, index) => (
                <div key={index} className={style.romanceBackWrapper}>
                    <div className={style.romanceBack}>
                        <img className={style.romanceBackImg} src={item.img} alt="" />
                    </div>
                    <div className={style.wrapperText}>
                    <div className={style.romanceVariants}>
                        <p className={style.romanceVariantsInner}>
                            {item.absoluteText}
                        </p>
                    </div>
                    <div className={style.romanceText}>
                        <p className={style.romanceTextInner}>
                            {item.text}
                        </p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Romance