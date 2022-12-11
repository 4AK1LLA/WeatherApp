import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div class="search">
      <form #form="ngForm" (submit)="onSubmit()">
        <input type="text" placeholder="Search city" name="city" [(ngModel)]="cityName">
      </form>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cityName: string = 'Kyiv';
  @Output() submitEvent = new EventEmitter<string>;

  ngOnInit(): void { 
    this.submitEvent.emit(this.cityName);
  }

  onSubmit(): void {
    this.submitEvent.emit(this.cityName);
    this.cityName = '';
  }
}