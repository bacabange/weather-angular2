import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
