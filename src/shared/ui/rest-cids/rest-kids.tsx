import { kidsCardItems } from '../../../../public/data/data'
import style from './rest-kids.module.scss'

const RestKids = () => {
    return (
        <div className={style.kidsWrapper}>
            {kidsCardItems.map((item, index) => (
                <div className={style.kidsBackWrapper}>
                    <div className={style.kidsBack}>
                        <img className={style.kidsBackImg} src={item.img} alt="" />
                    </div>
                    <div className={style.wrapperText}>
                    <div className={style.kidsVariants}>
                        <p className={style.kidsVariantsInner}>
                            {item.absoluteText}
                        </p>
                    </div>
                    <div className={style.kidsText}>
                        <p className={style.kidsTextInner}>
                            {item.text}
                        </p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RestKids