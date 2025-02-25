import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'
import style from './change-tarif.module.scss'
import { tarifListItems } from '../../../../public/data/data'

const ChangeTarif = () => {
   return (
      <div className="">
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
      </div>
   )
}

export default ChangeTarif