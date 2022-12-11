import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { WeatherDTO } from '../models/weather.dto';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    var weatherDTO: WeatherDTO;
    environment.apiWeather.params.city = cityName;

    this.http.get<WeatherData>(
      environment.apiWeather.url, { headers: environment.apiWeather.headers, params: environment.apiWeather.params }
    ).subscribe({
      next: (response) => {
        weatherDTO = {
          temperature: response.temp,
          min_temperature: response.min_temp,
          max_temperature: response.max_temp,
          humidity: response.humidity,
          wind_speed: response.wind_speed,
          city_name: cityName
        }
        console.log(weatherDTO);
      }
    });
  }
}
