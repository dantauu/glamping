// // components/PriceSlider.js
//npm install nouislider

// import { useState, useEffect, useRef } from 'react'
// import dynamic from 'next/dynamic'

// // Динамически импортируем noUiSlider, чтобы избежать проблем с SSR
// const noUiSlider = dynamic(() => import('nouislider'), { ssr: false })

// const PriceSlider = () => {
// 	const [minPrice, setMinPrice] = useState(0)
// 	const [maxPrice, setMaxPrice] = useState(100)

// 	const sliderRef = useRef(null)

// 	useEffect(() => {
// 		if (!sliderRef.current) return

// 		// Создаем ползунок с двумя точками
// 		noUiSlider.create(sliderRef.current, {
// 			start: [minPrice, maxPrice],
// 			connect: true,
// 			range: {
// 				min: 0,
// 				max: 500,
// 			},
// 			step: 1,
// 		})

// 		// Слушаем изменения ползунка
// 		sliderRef.current.noUiSlider.on('update', (values, handle) => {
// 			if (handle === 0) {
// 				setMinPrice(Math.round(values[0]))
// 			} else {
// 				setMaxPrice(Math.round(values[1]))
// 			}
// 		})

// 		// Очистка при размонтировании компонента
// 		return () => {
// 			if (sliderRef.current) {
// 				sliderRef.current.noUiSlider.destroy()
// 			}
// 		}
// 	}, [minPrice, maxPrice])

// 	const handleMinPriceChange = e => {
// 		const value = e.target.value
// 		setMinPrice(value)
// 		sliderRef.current.noUiSlider.set([value, null]) // Обновляем ползунок с новыми значениями
// 	}

// 	const handleMaxPriceChange = e => {
// 		const value = e.target.value
// 		setMaxPrice(value)
// 		sliderRef.current.noUiSlider.set([null, value]) // Обновляем ползунок с новыми значениями
// 	}

// 	return (
// 		<div>
// 			<div>
// 				<input
// 					type='number'
// 					value={minPrice}
// 					onChange={handleMinPriceChange}
// 					min='0'
// 					max='500'
// 				/>
// 				<input
// 					type='number'
// 					value={maxPrice}
// 					onChange={handleMaxPriceChange}
// 					min='0'
// 					max='500'
// 				/>
// 			</div>
// 			<div ref={sliderRef} style={{ marginTop: '20px' }} />
// 		</div>
// 	)
// }

// export default PriceSlider
