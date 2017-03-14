// import { CoordsInterface } from 'interfaces/coords';

export class Weather {

	constructor(
		public id: number,
		public name: string,
		public cod: number,
		public coord: {
			lat: number,
			lon: number
		},
		public weather: Array<any>,
		public base: string,
		public main: {
			temp: number,
			pressure: number,
			humidity: number,
			temp_min: number,
			temp_max: number
		},
		public visibility: number,
		public wind: {
			speed: number,
			deg: number
		},
		public clouds: {
			all: number
		},
		public dt: number,
		public sys: {
			type: number,
			id: number,
			message: number,
			country: string,
			sunrise: number,
			sunset: number
		}
	) {}
}