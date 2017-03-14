import { Component, OnInit, Input } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { City } from '../../models/city';
import { Photo } from '../../models/photo';
import { Weather } from '../../models/weather';

@Component({
	selector: 'weather-detail',
	templateUrl: './weather-detail.component.html',
	styleUrls: ['./weather-detail.component.css'],
	providers: [
		WeatherService
	]
})
export class WeatherDetailComponent implements OnInit {
	@Input() city: City;
	@Input() weather: Weather;
	public photos: Photo[];
	public image: string;
	public myDate: Date;

	constructor(
		private _weatherService: WeatherService
	) {
		this.myDate = new Date();
		this.image = 'http://victorroblesweb.es/wp-content/uploads/2016/06/angular2.png';
	}

	ngOnInit() {
		this._weatherService.getImage(this.weather.weather[0].main, this.weather.coord.lat, this.weather.coord.lon).subscribe(
			result => {
				if(result.stat == "ok") {
					if(result.photos.pages > 0) {
						this.photos = result.photos.photo;
						this.image = this.randomImage();
					}
				}
			},

			error => console.log(error)
		);
	}

	randomImage() {
		let total = this.photos.length;
		return this.photos[Math.floor(Math.random() * total) + 1].url_l;
	}

	backgroundImage(){
		return {
			'background': 'url('+ this.image +') no-repeat center center',
			'background-size': 'cover'
		}
	}

}
