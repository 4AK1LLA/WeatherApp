import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { GeoDTO } from '../models/geo-data.dto';
import { GeoData } from '../models/geo-data.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCityGeoData(cityName: string) {

    var _params = environment.apiGeocoding.params;
    _params.city = cityName;
    var geoDTO: GeoDTO;

    this.http.get<GeoData[]>(
      environment.apiGeocoding.url, 
      { headers: environment.apiGeocoding.headers, params: _params }
    ).subscribe({
      next: (response) => {
        geoDTO = {
          lat: response[0].lat,
          lon: response[0].lon,
          cityName: cityName
        }
        console.log(geoDTO);
      }
    });
  }
}
