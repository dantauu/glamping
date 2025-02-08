import PopularBtn from '@/shared/ui/popular-btn/popular-btn'
import { popularItemsFirst } from '../../../../public/data/data'
import style from './popular.module.scss'

const Popular = () => {
    return (
        <div className={style.popularWrapper}>
            <div className={style.popularLeftPart}>
            {popularItemsFirst.map((item, index) => (
                <div key={index} className={style.popularCardLeft}>
                    <div className={style.popularImg}>
                        <img className={style.popularImgInner} src={item.img} alt="" />
                    </div>
                    <div className={style.popularVariants}>
                        <p className={style.popularVariantsInner}>
                            {item.text}
                        </p>
                    </div>
                    <div className={style.popularText}>
                        <p className={style.popularTextInner}>
                            {item.absoluteText}
                        </p>
                    </div>
                </div>
                ))}
                <div className={style.variantsNumber}>
                    <PopularBtn />
                </div>
            </div>
        </div>
    )
}

export default Popular