// // components/RegionMap.js

//npm install react-simple-maps
//npm install react-modal

// import { useState } from 'react'
// import ReactModal from 'react-modal'
// import {
// 	ComposableMap,
// 	Geographies,
// 	Geography,
// 	Marker,
// } from 'react-simple-maps'

// // Пример данных для области и цен
// const regionsData = [
// 	{
// 		name: 'Region 1',
// 		coordinates: [-100, 40],
// 		price: 150,
// 		info: 'Information about Region 1',
// 	},
// 	{
// 		name: 'Region 2',
// 		coordinates: [-90, 45],
// 		price: 200,
// 		info: 'Information about Region 2',
// 	},
// 	{
// 		name: 'Region 3',
// 		coordinates: [-80, 35],
// 		price: 250,
// 		info: 'Information about Region 3',
// 	},
// ]

// const RegionMap = () => {
// 	const [isModalOpen, setIsModalOpen] = useState(false)
// 	const [modalContent, setModalContent] = useState(null)

// 	const handleMarkerClick = region => {
// 		setModalContent(region)
// 		setIsModalOpen(true)
// 	}

// 	const closeModal = () => {
// 		setIsModalOpen(false)
// 	}

// 	return (
// 		<div>
// 			<ComposableMap>
// 				<Geographies geography='/path/to/your/geography.json'>
// 					{({ geographies }) =>
// 						geographies.map(geo => (
// 							<Geography key={geo.rsmKey} geography={geo} />
// 						))
// 					}
// 				</Geographies>

// 				{/* Маркеры с ценниками */}
// 				{regionsData.map((region, index) => (
// 					<Marker key={index} coordinates={region.coordinates}>
// 						<circle
// 							r={8}
// 							fill='red'
// 							onClick={() => handleMarkerClick(region)}
// 						/>
// 						<text textAnchor='middle' fill='#fff' fontSize={10} y={-10}>
// 							${region.price}
// 						</text>
// 					</Marker>
// 				))}
// 			</ComposableMap>

// 			{/* Модальное окно с информацией */}
// 			{modalContent && (
// 				<ReactModal isOpen={isModalOpen} onRequestClose={closeModal}>
// 					<h2>{modalContent.name}</h2>
// 					<p>{modalContent.info}</p>
// 					<p>Price: ${modalContent.price}</p>
// 					<button onClick={closeModal}>Close</button>
// 				</ReactModal>
// 			)}
// 		</div>
// 	)
// }

// export default RegionMap
