'use client'
import { useEffect, useRef } from 'react'
import style from './change-information-map.module.scss'

const ChangeInformationMap = () => {
    const mapRef = useRef<ymaps.Map | null>(null)
        const mapContainerRef = useRef<HTMLDivElement>(null)
        useEffect(() => {
            const initMap = async () => {
                try {
                    await window.ymaps.ready()
                    if (mapContainerRef.current && !mapRef.current) {
                        mapRef.current = new window.ymaps.Map(mapContainerRef.current, {
                            center: [45.03547, 38.975313],
                            zoom: 10,
                        })
                    }
                } catch (error) {
                    console.error('Ошибка', error)
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
            <>
		<div className={style.title}>
			<h1 className={style.titleInner}>
				Где находится ваш объект?
			</h1>
		</div>
		<div className={style.mapContainer}>
			<div className={style.expandButton}>
                <div className={style.icon}>
                    <img src={'/assets/img/location.svg'} alt="" />
                </div>
				<div className=''>
					<input className={style.inputInner} type='text' placeholder='Введит адрес объекта' />
				</div>
			</div>

			<div ref={mapContainerRef} className={style.map}></div>
		</div>
		</>
    )
}

export default ChangeInformationMap