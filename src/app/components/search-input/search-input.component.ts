import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {Observable} from 'rxjs/Rx';

import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
import { CitiesService } from '../../services/cities.service';
import { WeatherService } from '../../services/weather.service';
import { City } from '../../models/city';
import { Weather } from '../../models/weather';

@Component({
	selector: 'search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.css'],
	providers: [
		CitiesService,
		WeatherService
	]
})

export class SearchInputComponent implements OnInit {

	public cities: City[];
	public city: City;
	public weather: Weather;
	public showWeatherDetail: boolean;

	myControl = new FormControl();
	filteredOptions: Observable<City[]>;

	constructor(
		private _citiesService: CitiesService,
		private _weatherService: WeatherService
	) {
		this.showWeatherDetail = false;
	}

	ngOnInit() {
		// consumir servicio de ciudades
		this._citiesService.getCities().subscribe(
			result => {
				this.cities = result;
				this.filteredOptions = this.myControl.valueChanges
					.startWith(null)
					.map(city => city && typeof city === 'object' ? city.name : city)
					.map(name => name ? this.filter(name) : this.cities.slice(1));
			}, 
			error => console.log(error));
	}
	// Evento, seleccionar ciudad
	selectCity (city: City){
		this.city = city;
		this._weatherService.getWeather(city._id).subscribe(
			result => {
				this.weather = result;
				this.show(true);
			},

			error => console.log(error)
		);
	}

	// Filtrar por el nombre de la ciudad
	filter(name: string): City[] {
		return this.cities.filter(option => new RegExp(name, 'gi').test(option.name)); 
	}
	// Mostrar el nombre de la ciudad cuando se selecciona
	displayFn(city: City): string {
		return city ? city.name : null;
	}

	show(isShow){
		this.showWeatherDetail = isShow;
	}	

}
