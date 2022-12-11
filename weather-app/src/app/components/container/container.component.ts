import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    //this.weatherService.getCityGeoData('London');
  }

}
