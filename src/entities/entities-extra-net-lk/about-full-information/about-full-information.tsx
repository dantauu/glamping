'use client'

import Link from 'next/link'
import style from './about-full-information.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import AboutFullInformationMobile from './about-full-information-mobile/about-full-information-mobile'

const AboutFullInformation = () => {
    const isMobile = useMediaQuery('(max-width: 1125px)')
    return (
        <div className={style.fullInformationWrapper}>
            <div className={style.wrapperTitle}>
                <div className={style.title}>
                    <h1 className={style.titleInner}>
                        Общая информация
                    </h1>
                </div>
                <Link href={'/extra-net-lk/change-information'} className={style.titleImg}>
                    <img src={'/assets/img/pencel.svg'} alt="" />
                </Link>
            </div>
            {isMobile ? <AboutFullInformationMobile /> : (
                <>
                    <div className={`${style.descriptionWrapper} ${style.modifyWidthThree}`}>
                    <div className={style.leftTitle}>
                        <p className={style.leftTitleInner}>
                            Общее 
                        </p>
                    </div>
                    <div className={style.border}></div>
                        <div className={style.descriptionItemWrapper}>
                            <div className={style.descriptionItem}>
                                <p className={style.descriptionItemInner}>
                                    Глэмпинг «Лагуна» находится в Истре. Этот отель располагается в 6 км от центра города. Рядом с отелем — Москва-Сити, Главное здание МГУ и ВДНХ.
                                </p>
                            </div>
                        <div className={style.descriptionNoTitle}>
                            <p className={style.descriptionNoTitleInner}>
                                Бесплатный Wi-Fi на территории поможет всегда оставаться на связи. Для путешественников на машине организована парковка. Среди услуг для красоты и здоровья — сауна, паровая баня, баня и хамам. Готовьтесь к весёлому и насыщенному отдыху! На территории есть площадка для пикника и площадка для барбекю.<br/>
                                Персонал отеля говорит на русском.<br/>
                                Чтобы вы могли отдохнуть после долгого дня, в номере есть телевизор. Оснащение зависит от выбранной категории номера.
                            </p>
                        </div>
                  </div> 
                </div>
                <div className={`${style.descriptionWrapper} ${style.modifyWidthFour}`}>
                    <div className={style.leftTitle}>
                        <p className={style.leftTitleInner}>
                            Расположение 
                        </p>
                    </div>
                    <div className={style.border}></div>
                    <div className={style.descriptionItemWrapper}>
                        <div className={style.descriptionItem}>
                            <p className={style.descriptionItemInner}>
                                Тульская область, Заокский район, посёлок Ланьшинский, Береговая улица, 164А. 158 км от Москвы.
                                Наши координаты — 57.384 645, 66.151 900
                            </p>
                        </div>
                    </div> 
                </div>
                <div className={style.informationTime}>
                    <div className={style.informationImport}>
                        <div className={style.informationImportIcon}>
                            <img className={style.informationTimeImg} src={'/assets/img/import.svg'} alt="" />
                        </div>
                        <div className={style.informationImportText}>
                            <p className={style.informationImportTextInner}>
                                Заезд
                            </p>
                        </div>
                    </div>
                    <div className={style.border}></div>
                    <div className={style.descriptionTime}>
                        <div className={style.timeText}>
                            <p className={style.timeTextInner}>
                                с 15:00
                            </p>
                        </div>
                    </div> 
                </div>

                <div className={style.informationTime}>
                    <div className={style.informationImport}>
                        <div className={style.informationImportIcon}>
                            <img className={style.informationTimeImg} 
                            src={'/assets/img/export.svg'} alt="" />
                        </div>
                        <div className={style.informationImportText}>
                            <p className={style.informationImportTextInner}>
                                Выезд
                            </p>
                        </div>
                    </div>
                    <div className={style.border}></div>
                    <div className={style.descriptionTime}>
                        <div className={style.timeText}>
                            <p className={style.timeTextInner}>
                                до 12:00
                            </p>
                        </div>
                    </div> 
                </div>

                <div className={style.descriptionWrapper}>
                    <div className={style.leftTitle}>
                        <p className={style.leftTitleInner}>
                            Сезонность 
                        </p>
                    </div>
                    <div className={style.border}></div>
                    <div className={style.descriptionItemWrapper}>
                        <div className={style.descriptionItem}>
                            <p className={style.descriptionItemInner}>
                                Круглогодичный
                            </p>
                        </div>
                    </div> 
                </div>

                <div className={`${style.descriptionWrapper} ${style.modifyWidth}`}>
                    <div className={style.leftTitle}>
                        <p className={style.leftTitleInner}>
                            Варианты размещение 
                        </p>
                    </div>
                    <div className={style.border}></div>
                    <div className={style.descriptionItemWrapper}>
                        <div className={style.descriptionItem}>
                            <p className={style.descriptionItemInner}>
                               3 Комфортных дома с панорамным видом на хвойный лес;<br/>
                                6 летних глэмпов на берегу озера.
                            </p>
                        </div>
                    </div> 
                </div>

                <div className={`${style.descriptionWrapper} ${style.modifyWidthTwo}`}>
                    <div className={style.leftTitle}>
                        <p className={style.leftTitleInner}>
                            Условия оплаты
                        </p>
                    </div>
                    <div className={style.border}></div>
                        <div className={style.descriptionItemWrapper}>
                            <div className={style.descriptionItem}>
                                <p className={style.descriptionItemInner}>
                                    Проживание оплачивается при бронировании онлайн в размере 100 %
                                </p>
                            </div>
                        <div className={style.descriptionNoTitle}>
                            <p className={style.descriptionNoTitleInner}>
                                При отмене бронирования раньше, чем за 7 дней до даты заезда, мы возвращаем всю сумму, от 7 дней до даты заезда, если мы успеваем найти замену, сумма предоплаты возвращается, в противном случае сумма сгорает. Мы также можем предложить оставить депозит до следующего Вашего приезда. Перенести приезд можно только 1 раз без возможности отменты.<br/>
                                Проживание с детьми до 3 лет бесплатно без предоставления места.
                            </p>
                        </div>
                  </div> 
                </div>
                </>
            )}
        </div>
    )
}

export default AboutFullInformation