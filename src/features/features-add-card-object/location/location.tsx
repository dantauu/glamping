'use client'
import { useState, useRef, useEffect } from 'react'
import style from './location.module.scss'

declare global {
	namespace ymaps {
		function ready(): Promise<void>

		class Location {
			constructor(element: string | HTMLElement, options?: MapOptions)
			destroy(): void
			container: {
				fitToViewport(): void
			}
		}

		interface MapOptions {
			center?: number[]
			zoom?: number
		}
	}

	interface Window {
		ymaps: typeof ymaps
	}
}

const Location = () => {
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
				Где находится ваш объект 
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

export default Location
