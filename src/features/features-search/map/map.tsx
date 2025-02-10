'use client'
import { useState, useRef, useEffect } from 'react'
import style from './map.module.scss'

declare global {
  namespace ymaps {
    function ready(): Promise<void>
    
    class Map {
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

const Map = () => {
  const [isExpanded, setIsExpanded] = useState(false)
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

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
    setTimeout(() => {
      mapRef.current?.container.fitToViewport()
    }, 300)
  }

  return (
    <div className={`${style.mapContainer} ${isExpanded ? style.expanded : ''}`}>
      <button 
        onClick={handleExpand}
        className={style.expandButton}
      >
        {isExpanded ? 'Свернуть' : 'Развернуть'} карту
      </button>
      
      <div ref={mapContainerRef} className={style.map}></div>
    </div>
  )
}

export default Map