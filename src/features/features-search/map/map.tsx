// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import style from './map.module.scss'
// import dynamic from 'next/dynamic'

// const ymaps = dynamic(() => import('yandex-maps'), {ssr: false})

// interface MapMarker {
//   coordinates: [number, number]
//   title: string
//   content: string
// }

// const Map = () => {
//   const [isExpanded, setIsExpanded] = useState(false)
//   const [activeMarker, setActiveMarker] = useState<number | null>(null)
//   const mapRef = useRef<any>(null)
//   const mapContainerRef = useRef<HTMLDivElement>(null)
//   const markers: MapMarker[] = [
//     {
//       coordinates: [55.751574, 37.573856],
//       title: 'Москва',
//       content: 'Столица России'
//     },
//     // Добавьте другие маркеры
//   ]

//   // Инициализация карты
//   useEffect(() => {
//     ymaps.ready().then(() => {
//       if (mapContainerRef.current) {
//         mapRef.current = new ymaps.Map(mapContainerRef.current, {
//           center: [55.751574, 37.573856],
//           zoom: 10
//         })

//         // Добавляем маркеры
//         markers.forEach((marker, index) => {
//           const placemark = new ymaps.Placemark(
//             marker.coordinates,
//             {
//               hintContent: marker.title,
//               balloonContent: marker.content
//             },
//             {
//               iconLayout: 'default#image',
//               iconImageHref: '/map-marker.png',
//               iconImageSize: [32, 32],
//               iconImageOffset: [-16, -32]
//             }
//           )
          
//           placemark.events.add('click', () => handleMarkerClick(index))
//           mapRef.current?.geoObjects.add(placemark)
//         })
//       }
//     })

//     return () => {
//       mapRef.current?.destroy()
//     }
//   }, [])

//   const handleExpand = () => {
//     setIsExpanded(!isExpanded)
//   }

//   const handleMarkerClick = (index: number) => {
//     setActiveMarker(activeMarker === index ? null : index)
//   }

//   return (
//     <div className={`${style.mapContainer} ${isExpanded ? style.expanded : ''}`}>
//       <button 
//         onClick={handleExpand}
//         className={style.expandButton}
//       >
//         {isExpanded ? 'Свернуть' : 'Развернуть'} карту
//       </button>
      
//       <div ref={mapContainerRef} className={style.map}></div>

//       {markers.map((marker, index) => (
//         <div
//           key={index}
//           className={style.markerPopup}
//           style={{
//             display: activeMarker === index ? 'block' : 'none',
//             left: `${marker.coordinates[0]}%`,
//             top: `${marker.coordinates[1]}%`
//           }}
//         >
//           <div className={style.popupContent}>
//             <h3>{marker.title}</h3>
//             <p>{marker.content}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Map