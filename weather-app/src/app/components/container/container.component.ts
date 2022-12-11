import { Component, OnInit } from '@angular/core';
import { WeatherDTO } from 'src/app/models/weather.dto';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  WeatherDTO?: WeatherDTO;
  CityName: string = 'New York';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.weatherService
      .getWeatherDataObservable(this.CityName).subscribe({
        next: (response) => {
          this.WeatherDTO = {
            temperature: response.temp,
            min_temperature: response.min_temp,
            max_temperature: response.max_temp,
            humidity: response.humidity,
            wind_speed: response.wind_speed,
            city_name: this.CityName
          }
        }
      });

  }

}
