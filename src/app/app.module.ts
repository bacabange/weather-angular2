import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    HomePageComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
