import Link from 'next/link'
import { objectOfertaItems, ofertaSideItems } from '../../../../public/data/data'
import style from './oferta.module.scss'
import CheckBoxSquare from '@/shared/ui/chekcboxes/checkbox-square/checkbox-square'


const Oferta = () => {
    return (
    <div className={style.ofertaBack}>
        <div className={style.ofertaWrapper}>
            <div className={style.title}>
                <Link href={'/extra-net-auth/conclude-full'} className={style.icon}>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					    <path d="M15 7L2 7M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke-width="2" stroke-linecap="round"/>
					    </svg>
                </Link>
                <div className={style.titleText}>
                    <h1 className={style.titleTextInner}>
                        Заключить договор
                    </h1>
                </div>
            </div>
            <div className={style.nextTitle}>
                <h1 className={style.nextTitleInner}>
                    Оферта на заключение агентского договора
                </h1>
            </div>
            <div className={style.sideWrapper}>
                <div className={style.sideTitle}>
                    <p className={style.sideTitleInner}>
                        Стороны:
                    </p>
                </div>
                <div className={style.sideText}>
                    {ofertaSideItems.map((item, index) => (
                        <div key={index} className={style.sideTextWrapper}>
                            <p className={style.sideTextInner}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
                <div className={style.titleObjectOferta}>
                    <h2 className={style.titleObjectOfertaInner}>
                        Предмет договора
                    </h2>
                </div>
                <div className={style.objectOfertaTextWrapper}>
                    {objectOfertaItems.map((item, index) => (
                        <div key={index} className={style.objectOfertaInnerWrapper}>
                            <div className={style.mainText}>
                                <p className={style.mainTextInner}>
                                    {item.text}
                                </p>
                            </div>
                            <div className={style.dotWrapper}>
                                {item.dotTextOne?.map((item, index) => (
                                    <ul key={index} className={style.dotInnerWrapper}>
                                        <li className={style.dotTextContainer}>
                                            <p className={style.dotText}>
                                                {item.text}
                                            </p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        <div className={style.description}>
                            <div className={style.descriptionText}>
                                <p className={style.descriptionTextInner}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                     </div>
                    ))}
            <div className={style.signatureWrapper}>
                <div className={style.signatureTitle}>
                    <h2 className={style.signatureTitleInner}>
                        РЕКВИЗИТЫ И ПОДПИСИ СТОРОН
                    </h2>
                </div>
                <div className={style.scrollWrapper}>
                <div className={style.table}>
                    <div className={style.headerColumn}>
                        <div className={style.titleColumnWrapperLeft}>
                            <div className="">
                                <p className={style.titleColumnInner}>
                                    Компания
                                </p>
                            </div>
                            <div className={style.columnDesc}>
                                <p className={style.columnDescInner}>
                                    Glamping Russia
                                </p>
                            </div> 
                        </div>
                        <div className={style.titleColumnWrapperRight}>
                            <div className="">
                                <p className={style.titleColumnInner}>
                                    Объект размещения
                                </p>
                            </div>
                            <div className={style.columnDesc}>
                                <p className={style.columnDescInner}>
                                    Иванов Иван Иванович
                                </p>
                            </div> 
                        </div>
                    </div>
                    <div className={style.contentColumnWrapper}>
                        <div className={style.contentColumnLeft}>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    Юридический адрес: 119435, г. Москва, ул. Тверская, д. 15
                                </p>
                            </div>
                        </div>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    ИНН
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    7708888888
                                </p>
                            </div>
                        </div>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    КПП
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    7708888888
                                </p>
                            </div>
                        </div>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    ОГРН
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    1158888888999
                                </p>
                            </div>
                        </div>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    Банк:
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    АО «Т-Банк»
                                </p>
                            </div>
                        </div>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    р/счет
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    4071654864135121
                                </p>
                            </div>
                        </div>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    к/счет
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    4071654864135121
                                </p>
                            </div>
                        </div>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    БИК
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    4071654
                                </p>
                            </div>
                        </div>
                      </div>
                      <div className={style.contentColumnRight}>
                       <div className={style.itemColumnRight}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInnerText}>
                                    Юридический адрес: 119435, г. Москва, ул. Тверская, д. 15
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    4071654
                                </p>
                            </div>
                        </div>
                        <div className={style.itemColumn}>
                            <div className={style.leftContentItem}>
                                <p className={style.leftContentItemInner}>
                                    ИНН
                                </p>
                            </div>
                            <div className={style.rightContent}>
                                <p className={style.rightContentInner}>
                                    7708888888
                                </p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div className={style.fix}>
        <div className={style.check}>
            <CheckBoxSquare />
            <div className={style.checkText}>
                <h2 className={style.checkTextInner}>
                    Я ознакомился, согласен и полностью принимаю условия Оферты
                </h2>
            </div>
        </div>
        <Link href={'/extra-net-auth/thanks'} className={style.button}>
            <button className={style.buttonInner}>Принять оферту</button>
        </Link>
        </div>
    </div>
</div>
    )
}

export default Oferta