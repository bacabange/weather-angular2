export class Photo {

	constructor(
		public id: string,
		public owner: string,
		public secret: string,
		public server: string,
		public farm: number,
		public title: string,
		public ispublic: number,
		public isfriend: number,
		public isfamily: number,
		public url_l: string,
		public height_l: string,
		public width_l: string
	) {}
}