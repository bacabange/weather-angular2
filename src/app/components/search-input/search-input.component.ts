import { Component, OnInit } from '@angular/core';

import { CitiesService } from '../../services/cities.service';
import { City } from '../../models/city';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  providers: [
  	CitiesService
  ]
})
export class SearchInputComponent implements OnInit {

	public cities: City[];

  constructor(
	private _citiesService: CitiesService
  ) { }

  ngOnInit() {
  	this._citiesService.getJSON().subscribe(
  		result => {
  			console.log(result);
  		}, 
  		error => console.log(error));
  }

}
