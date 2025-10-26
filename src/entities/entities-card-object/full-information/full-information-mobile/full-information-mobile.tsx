'use client'

import { useEffect, useRef, useState } from 'react'
import style from './full-information-mobile.module.scss'

const FullInformationMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const fullText = `Глэмпинг «Лагуна» находится в Истре. Этот отель располагается в 6 км от центра города. Рядом с отелем — Москва-Сити, Главное здание МГУ и ВДНХ. Бесплатный Wi-Fi на территории поможет всегда оставаться на связи. Для путешественников на машине организована парковка. Среди услуг для красоты и здоровья — сауна, паровая баня, баня и хамам. Готовьтесь к весёлому и насыщенному отдыху! На территории есть площадка для пикника и площадка для барбекю. Персонал отеля говорит на русском. Чтобы вы могли отдохнуть после долгого дня, в номере есть телевизор. Оснащение зависит от выбранной категории номера.`

  const cutIndex = fullText.indexOf('ВДНХ.') + 5
  const shortText = fullText.slice(0, cutIndex)

   const mapRef = useRef<ymaps.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      try {
        await window.ymaps.ready()
        if (mapContainerRef.current && !mapRef.current) {
          mapRef.current = new window.ymaps.Map(mapContainerRef.current, {
            center: [55.751574, 37.573856],
            zoom: 10
          })
        }
      } catch (error) {
        console.error('Ошибка инициализации карты:', error)
      }
    }

    if (typeof window !== 'undefined' && window.ymaps) {
      initMap()
    }

    return () => {
      mapRef.current?.destroy()
    }
  }, [])

  return (
    <div className={style.fullInformationMobileWrapper}>
      <div className={style.title}>
        <p className={style.titleInner}>
          Общая информация
        </p>
      </div>
      <div className={style.fullInformationBlock}>
        <div className={style.fullInformationTitle}>
          <p className={style.fullInformationTitleInner}>
            Общее
          </p>
        </div>
        <div className={style.fullInformationDescription}>
          <div 
            className={`${style.textContainer} ${isExpanded ? style.expanded : ''}`}
            aria-expanded={isExpanded}>
            <p className={style.fullInformationDescriptionInner}>
              {isExpanded ? fullText : shortText}
            </p>
          </div>
          <button 
            className={style.moreButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Скрыть' : 'Подробнее'}
          </button>
        </div>
      </div>
      <div className={style.mapWrapper}>
         <div className={style.mapTitleWrapper}>
            <div className={style.mapTitle}>
               <p className={style.mapTitleInner}>
                  Расположение
               </p>
            </div>
            <div className={style.mapIconWrapper}>
               <div className={style.mapIcon}>
                  <img className={style.mapIconInner} src={'/assets/img/map.svg'} alt="" />
               </div>
               <div className={style.mapIconText}>
                  <p className={style.mapIconTextInner}>
                     Показать на карте
                  </p>
               </div>
            </div>
         </div>
         <div className={style.mapLocationTitleWrapper}>
            <div className={style.locationTitle}>
               <p className={style.locationTitleInner}>
                  · Краснодарский край, Елизовский район
               </p>
            </div>
            <div className={style.locationDescriptionWrapper}>
               <div className={style.lengthText}>
                  <p className={style.lengthTextInner}>
                     · 27 км до Краснодара
                  </p>
               </div>
               <div className={style.coordinate}>
                  <p className={style.coordinateInner}>
                     · Наши координаты — 57.384 645, 66.151 900
                  </p>
               </div>
            </div>
         </div>
         <div className={style.mapItem}>
            <div ref={mapContainerRef} className={style.mapContainer} />
         </div>
      </div>
      <div className={style.conditionWrapper}>
         <div className={style.conditionTitle}>
            <p className={style.conditionTitleInner}>
               Условия заселения
            </p>
         </div>
         <div className={style.conditionItems}>
            <div className={style.conditionItem}>
               <div className={style.conditionImg}>
                  <img src={'/assets/img/import.svg'} alt="" />
               </div>
               <div className={style.conditionText}>
                  <p className={style.conditionTextInner}>
                     Заезд <span className={style.time}>с 15:00</span>
                  </p>
               </div>
            </div>
            <div className={style.conditionItem}>
               <div className={style.conditionImg}>
                  <img src={'/assets/img/export.svg'} alt="" />
               </div>
               <div className={style.conditionText}>
                  <p className={style.conditionTextInner}>
                     Выезд <span className={style.time}>с 12:00</span>
                  </p>
               </div>
            </div>
         </div>
      </div>
      <div className={style.remainsWrapper}>
         <div className={style.remainItem}>
            <div className={style.remainTitle}>
               <p className={style.remainTitleInner}>
                  Сезонность
               </p>
            </div>
            <div className={style.remainDescription}>
               <p className={style.remainDescriptionInner}>
                  Круглогодичный
               </p>
            </div>
         </div>
         <div className={style.remainItem}>
            <div className={style.remainTitle}>
               <p className={style.remainTitleInner}>
                  Варианты размещение
               </p>
            </div>
            <div className={style.remainDescription}>
               <p className={style.remainDescriptionInner}>
                  3 Комфортных дома с панорамным видом на хвойный лес;<br />
                  6 летних глэмпов на берегу озера.
               </p>
            </div>
         </div>
         <div className={style.remainItem}>
            <div className={style.remainTitle}>
               <p className={style.remainTitleInner}>
                  Условия оплаты
               </p>
            </div>
            <div className={style.remainDescription}>
               <div className={style.remainDescriptionMoney}>
                  <p className={style.remainDescriptionInner}>
                     Проживание оплачивается при бронировании онлайн в размере 100 %.
                  </p>
               </div>
               <div className={style.remainDescriptionMoney}>
                  <p className={style.remainDescriptionInner}>
                     <br />
                     При отмене бронирования раньше, чем за 7 дней до даты заезда, мы возвращаем всю сумму, от 7 дней до даты заезда, если мы успеваем найти замену, сумма предоплаты возвращается, в противном случае сумма сгорает. Мы также можем предложить оставить депозит до следующего Вашего приезда. Перенести приезд можно только 1 раз без возможности отменты.
                  </p>
               </div>
               <div className={style.remainDescriptionMoney}>
                  <p className={style.remainDescriptionInner}>
                     <br />
                     Проживание с детьми до 3 лет бесплатно без предоставления места.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default FullInformationMobile