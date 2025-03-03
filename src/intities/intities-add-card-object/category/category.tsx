'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import style from './category.module.scss'

const Category = () => {
    const isMobile = useMediaQuery('(max-width: 885px)')
    return (
        <div className={style.categoryWrapper}>
            <div className={style.categoryTitle}>
                <h1 className={style.categoryTitleInner}>
                    Категории номеров/ домов
                </h1>
            </div>
            <div className={style.categoryCard}>
                <div className={style.leftPart}>
                    {!isMobile ? <img className={style.leftPartImg}
                        src={'/assets/img/search-card-2.jpg'} alt="" /> : 
                        <img className={style.leftPartImgMibile}
                        src={'/assets/img/number-mobile.png'} alt="" />}
                </div>
                <div className={style.rightPartWrapper}>
                    <div className={style.rightPart}>
                        <div className={style.rightPartTitleWrapper}>
                            <div className={style.rightPartTitle}>
                                <h2 className={style.rightPartTitleInner}>
                                    Эко-домик 2
                                </h2>
                            </div>
                        </div>
                        <div className={style.doubleIcons}>
                            <div className={style.iconUp}>
                                <img src={'/assets/img/trash.svg'} alt="" />
                            </div>
                            <div className={style.iconUp}>
                                <img src={'/assets/img/pencel.svg'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={style.rightPartBottom}>
                        <div className={style.itemSet}>
                            <div className={style.itemSetIcon}>
                                <img src={'/assets/img/mashtab-icon.svg'} alt="" />
                            </div>
                            <div className={style.itemSetText}>
                                <p className={style.itemSetTextInner}>
                                    32 м²
                                </p>
                            </div>
                        </div>
                        <div className={style.itemSet}>
                            <div className={style.itemSetIcon}>
                                <img src={'/assets/img/man.svg'} alt="" />
                            </div>
                            <div className={style.itemSetText}>
                                <p className={style.itemSetTextInner}>
                                    ×3 (Один ребёнок до 14 лет — можно без отдельного спального места)
                                </p>
                            </div>
                        </div>
                        <div className={style.itemSet}>
                            <div className={style.itemSetIcon}>
                                <img src={'/assets/img/bed.svg'} alt="" />
                            </div>
                            <div className={style.itemSetText}>
                                <p className={style.itemSetTextInner}>
                                    1 двуспальная кровать
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightPartBottomItems}>
                        <div className={style.bottomItem}>
                            <p className={style.bottomItemInner}>
                                Wi-Fi
                            </p>
                        </div>
                        <div className={style.bottomItem}>
                            <p className={style.bottomItemInner}>
                                Вид на горную реку
                            </p>
                        </div>
                        <div className={style.bottomItem}>
                            <p className={style.bottomItemInner}>
                                Ванная комната
                            </p>
                        </div>
                        <div className={style.bottomItem}>
                            <p className={style.bottomItemInner}>
                                Фен
                            </p>
                        </div>
                        <div className={style.bottomItem}>
                            <p className={style.bottomItemInner}>
                                Мангал
                            </p>
                        </div>
                        <div className={style.bottomItem}>
                            <p className={style.bottomItemInner}>
                                Кондиционер
                            </p>
                        </div>
                        <div className={style.bottomItem}>
                            <p className={style.bottomItemInner}>
                                Можно с животными
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.buttonWrapper}>
                <div className={style.buttonIcon}>
                    <img src={'/assets/img/plus-white.svg'} alt="" />
                </div>
                <div className={style.button}>
                    <button className={style.buttonInner}>
                        Добавить номер
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Category