'use client'

import PopularBtn from '@/shared/ui/popular-btn/popular-btn'
import { popularItemsFirst, popularItemsSecond } from '../../../../public/data/data'
import style from './popular.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const Popular = () => {
    const isMobile = useMediaQuery('(max-width: 1100px)')
    return (
        <div className={style.popularWrapper}>
            <div className={style.popularLeftPartFullWrapper}>
                <div className={style.popularLeftPart}>
            {popularItemsFirst.map((item, index) => (
                <div key={index} className={style.popularCardLeft}>
                    <div className={style.popularImgLeft}>
                        {isMobile ? (
                            <img className={style.popularImgInnerLeft} 
                                src={item.imgMobile} alt='' />
                        ) : (
                            <img className={style.popularImgInnerLeft} 
                                src={item.img} alt='' />
                        )}
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
                    <div className={style.mobile}>
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
                    </div>
                    <PopularBtn wrapper={style.mobilePopular} />
                </div>
                </div>
                <div className={style.popularRightPart}>
                    {popularItemsSecond.map((item, index) => (
                        <div key={index} className={style.popularCardRight}>
                    <div className={style.popularImgRight}>
                        <img className={style.popularImgInnerRight} src={item.img} alt='' />
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