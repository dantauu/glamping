declare global {
	namespace ymaps {
		function ready(): Promise<void>

		class Map {
			constructor(element: HTMLElement | string, options?: MapOptions)
			geoObjects: any
			destroy(): void
		}

		interface MapOptions {
			center?: number[]
			zoom?: number
		}

		class Placemark {
			constructor(coords: number[], properties?: {}, options?: {})
			events: any
		}
	}
}
