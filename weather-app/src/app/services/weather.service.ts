import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherDataObservable(cityName: string): Observable<WeatherData> {

    environment.apiWeather.params.city = cityName;

    return this.http.get<WeatherData>(
      environment.apiWeather.url, { 
        headers: environment.apiWeather.headers, 
        params: environment.apiWeather.params 
      }
    )
  }
}
