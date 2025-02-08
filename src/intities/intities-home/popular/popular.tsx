import PopularBtn from '@/shared/ui/popular-btn/popular-btn'
import { popularItemsFirst, popularItemsSecond } from '../../../../public/data/data'
import style from './popular.module.scss'

const Popular = () => {
    return (
        <div className={style.popularWrapper}>
            <div className={style.popularLeftPartFullWrapper}>
                <div className={style.popularLeftPart}>
            {popularItemsFirst.map((item, index) => (
                <div key={index} className={style.popularCardLeft}>
                    <div className={style.popularImg}>
                        <img className={style.popularImgInner} src={item.img} alt='' />
                    </div>
                    <div className={style.popularText}>
                        <p className={style.popularTextInner}>
                            {item.text}
                        </p>
                    </div>
                    <div className={style.popularVariants}>
                        <p className={style.popularVariantsInner}>
                            {item.absoluteText}
                        </p>
                    </div>
                </div>
                ))}
                </div>
                <div className={style.variantsNumber}>
                    <div className={style.popularNumberWrapper}>
                        <h1 className={style.popularNumberInner}>
                            150 +
                        </h1>
                    </div>
                    <div className={style.popularNumberText}>
                        <p className={style.poularNumberTextInner}>
                            Вариантов где отдохнуть в России и СНГ
                        </p>
                    </div>
                    <PopularBtn />
                </div>
                </div>
                <div className={style.popularRightPart}>
                    {popularItemsSecond.map((item, index) => (
                        <div key={index} className={style.popularCardRight}>
                            <div className={style.popularImg}>
                        <img className={style.popularImgInner} src={item.img} alt='' />
                    </div>
                    <div className={style.popularTextBig}>
                        <p className={style.popularTextInner}>
                            {item.text}
                        </p>
                    </div>
                    <div className={style.popularVariantsBig}>
                        <p className={style.popularVariantsInner}>
                            {item.absoluteText}
                        </p>
                    </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Popular