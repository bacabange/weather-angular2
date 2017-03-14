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

	public icons: Array<any>;
	public code: number;
	public icon: string;

	constructor(
		private _weatherService: WeatherService
	) {
		this.myDate = new Date();
		this.image = 'http://victorroblesweb.es/wp-content/uploads/2016/06/angular2.png';
		this.code = 8;

		this.icons = [
			{code: 2, icon: 'wi-thunderstorm'},
			{code: 3, icon: 'wi-rain-mix'},
			{code: 5, icon: 'wi-rain'},
			{code: 6, icon: 'wi-snow'},
			{code: 7, icon: 'wi-windy'},
			{code: 8, icon: 'wi-cloud'}
		];

		this.icon = 'wi-cloud';
	}

	ngOnInit() {
		this._weatherService.getImage(this.weather.weather[0].main, this.weather.coord.lat, this.weather.coord.lon).subscribe(
			result => {
				if(result.stat == "ok") {
					if(result.photos.pages > 0) {
						this.photos = result.photos.photo;
						this.image = this.randomImage();
						this.getIcon();
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

	getIcon(){
		this.code = Math.round(this.weather.weather[0].id / 100);

		for (var i = this.icons.length - 1; i >= 0; i--) {
			if(this.code == this.icons[i].code) {
				this.icon = this.icons[i].icon;
				return;
			}
		}
	}

}
