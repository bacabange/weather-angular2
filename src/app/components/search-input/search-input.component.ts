import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

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

	public cities: Array<any>;
	stateCtrl: FormControl;
	filteredStates: any;

	states = [
		'Alabama',
		'Alaska',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'Florida',
		'Georgia',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming',
	];

	constructor(
		private _citiesService: CitiesService
	) {
		this.stateCtrl = new FormControl();
		this.filteredStates = this.stateCtrl.valueChanges
			.startWith(null)
			.map(name => this.filterStates(name));

	}

	filterStates(val: string) {
		return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
	}

	ngOnInit() {

		this._citiesService.getCities().subscribe(
			result => {
				this.cities = result;
			}, 
			error => console.log(error));
	}

}
