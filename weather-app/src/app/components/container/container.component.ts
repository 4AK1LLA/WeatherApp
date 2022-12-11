import { Component } from '@angular/core';
import { WeatherDTO } from 'src/app/models/weather.dto';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  weatherDTO?: WeatherDTO;

  constructor(private weatherService: WeatherService) { }

  onInputSubmit(cityName: string): void {
    this.weatherService
      .getWeatherDataObservable(cityName).subscribe({
        next: (response) => {
          this.weatherDTO = {
            temperature: response.temp,
            min_temperature: response.min_temp,
            max_temperature: response.max_temp,
            humidity: response.humidity,
            wind_speed: response.wind_speed,
            city_name: cityName
          }
        }
      });
  }
}
