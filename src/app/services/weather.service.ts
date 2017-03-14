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

	public api_key_flickr:string;
	public url_flickr:string;

	constructor(private _http: Http){
		this.api_key = 'ddacac8b7fd81aa622669153aaa158ce';
		this.url = 'http://api.openweathermap.org/data/2.5/weather';

		this.api_key_flickr = 'f4017a5e5f764df7fa66d293223755bc';
		this.url_flickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
	}

    getWeather(id){
		let params: URLSearchParams = new URLSearchParams();

		params.set('units', 'metric');
		params.set('appid', this.api_key);
		params.set('id', id);

		return this._http.get(this.url, {search: params})
						.map(res => res.json());
	}

	getImage(tags:string, lat:any, lon:any){
		let params: URLSearchParams = new URLSearchParams();

		tags = tags.split(/[ ,]+/).join(',');
		tags = tags + ',weather';

		params.set('api_key', this.api_key_flickr);
		params.set('tags', tags);
		params.set('lat', lat);
		params.set('lon', lon);
		params.set('accuracy', '1');
		params.set('sort', 'relevance');
		params.set('extras', 'url_l');
		params.set('format', 'json');
		params.set('nojsoncallback', '1');

		return this._http.get(this.url_flickr, {search: params})
						.map(res => res.json());
	}

}