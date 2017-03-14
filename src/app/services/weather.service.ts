import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class WeatherService{

    public url:string;
	public api_key:string;

	constructor(private _http: Http){
		this.api_key = 'ddacac8b7fd81aa622669153aaa158ce';
		this.url = 'http://api.openweathermap.org/data/2.5/weather';
	}

    getWeather(){
		let params: URLSearchParams = new URLSearchParams();
		
		params.set('appid', this.api_key);
		params.set('id', '2172797');

		return this._http.get(this.url, {search: params})
						.map(res => res.json());
	}

}