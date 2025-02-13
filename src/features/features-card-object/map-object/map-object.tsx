'use client'

import { useEffect, useRef } from 'react'
import style from './map-object.module.scss'


const MapObject = () => {
    const mapRef = useRef<ymaps.Map | null>(null)
	const mapContainerRef = useRef<HTMLDivElement>(null)

    
    useEffect(() => {
        const initMap = async () => {
          try {
            await window.ymaps.ready()
            if (mapContainerRef.current && !mapRef.current) {
              mapRef.current = new window.ymaps.Map(mapContainerRef.current, {
                center: [45.035470, 38.975313],
                zoom: 12
              })
            }
          } catch (error) {
            console.error('Ошибка', error)
          }
        }
          initMap()
        return () => {
          mapRef.current?.destroy()
        }
      }, [])
    return (
        <div className={style.mapObjectWrapper}>
            <div className={style.upPart}>
            <div className={style.title}>
                <h1 className={style.titleInner}>
                    Расположение
                </h1>
            </div>
            <div className={style.mapObjectText}>
                <div className={style.mapIcon}>
                    <img src={'/assets/img/location.svg'} alt="" />
                </div>
                <div className={style.mainText}>
                    <p className={style.mainTextInner}>
                        Краснодарский край, Елизовский район
                    </p>
                </div>
                <div className={style.textKm}>
                    <p className={style.textKmInner}>
                        · 27 км до Краснодара
                    </p>
                </div>
            </div>
            </div>
            <div className={style.downPart}>
                 <div ref={mapContainerRef} className={style.map}></div>
            </div>
        </div>
    )
}

export default MapObject