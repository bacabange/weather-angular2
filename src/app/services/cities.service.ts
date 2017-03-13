import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class CitiesService{

    constructor(private http: Http) { }

    public getCities(): Observable<any> {
         return this.http.get("./app/resources/city-list.json").map((res) => res.json());

     }
}