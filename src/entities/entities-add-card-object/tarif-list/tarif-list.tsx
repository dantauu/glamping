'use client'

import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import { tarifListItems } from '../../../../public/data/data'
import style from './tarif-list.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import TarifListMobile from './tarif-list-mobile/tarif-list-mobile'

const TarifList = () => {
    const isMobile = useMediaQuery('(max-width: 890px)')
    return (
        <>
        {isMobile ? <TarifListMobile /> : (
            <div className={style.tarifListWrapper}>
            <div className={style.tarifTitle}>
                <h1 className={style.tarifTitleInner}>
                    Выберите тарифы из списка или добавьте свои:
                </h1>
            </div>
            <div className={style.tarifListItemsWrapper}>
                {tarifListItems.map((item, index) => (
                    <div key={index} className={style.tarifListItem}>
                        <div className={style.titleWrapper}>
                            <div className={style.title}>
                                <h2 className={style.titleInner}>
                                    {item.title}
                                </h2>
                            </div>
                            <div className={style.conditions}>
                                <p className={style.conditionsInner}>
                                    {item.conditions}
                                </p>
                            </div>
                        </div>
                        <div className={style.itemsWrapper}>
                            <div className={style.itemsWrapperCheck}>
                                <div className={style.item}>
                                    <div className={style.itemIcon}>
                                        <img src={item.iconEat} alt="" />
                                    </div>
                                    <div className={style.itemText}>
                                        <p className={style.itemTextInner}>
                                            {item.textEat}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.item}>
                                    <div className={style.itemIcon}>
                                        <img src={item.iconRepost} alt="" />
                                    </div>
                                    <div className={style.itemText}>
                                        <p className={style.itemTextInner}>
                                            {item.textRepost}
                                        </p>
                                    </div>
                                </div>
                                <div className={style.item}>
                                    <div className={style.itemIcon}>
                                        <img src={item.iconCard} alt="" />
                                    </div>
                                    <div className={style.itemText}>
                                        <p className={style.itemTextInner}>
                                            {item.textCard}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CheckBoxSquare />
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.buttonWrapper}>
                <div className={style.buttonIcon}>
                    <img src={'/assets/img/plus-black.svg'} alt="" />
                </div>
                <div className={style.button}>
                    <button className={style.buttonInner}>
                        Добавить тариф
                    </button>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default TarifList