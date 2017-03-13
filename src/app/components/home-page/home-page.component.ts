import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';

@Component({
	selector: 'home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

	public showWeatherDetail: boolean;

	constructor() {
		this.showWeatherDetail = false;
	}

	ngOnInit() {
	}

	onShowWeatherDetail(showWeatherDetail: boolean) {
		console.log('Holi');
		this.showWeatherDetail = showWeatherDetail;
	}

}
