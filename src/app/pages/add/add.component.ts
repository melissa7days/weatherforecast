import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherService} from '../../services/weather/weather.service';
import {FbService} from '../../services/fb/fb.service';
import {first} from 'rxjs/operators';
import { weather } from 'src/app/weather';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  today: number = Date.now();
  constructor(private weatherService :WeatherService ,private router: Router) { 
  }
  weatherforcast:weather[];
  term :string;
  city: string;
  code: string;

  location = {
    city:  'london',
    code : 'uk'
  };
  weather:any;
  value:any;
 data:any [];
 selectedCity;
 cardCity;
 defultCity='Durban'
 defaultstate='ZA';
   showNote = false;

  ngOnInit(): void {
   
 
this.getDefaultWeather();

}
ngAfterContentChecked(): void {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  if(this.weatherService.check){
    this.getSearchedWeather();
    this.weatherService.check=false;
    
  }
  
}

getDefaultWeather(){

  return this.weatherService.getWeatherData(this.defultCity, this.defaultstate).subscribe(
    response => {
      console.log(response);
      this.weather=response;
    }
  );
}

check(){
  this.weatherService.check=true;
}
ngDoCheck():void{

}

getSearchedWeather(){
  return this.weatherService.getWeatherData(this.city,this.code).subscribe(
    response => {
      console.log(response);
      this.weather=response;
    }
  );
}
selectCity(city) {
  if (this.city.includes(city)) {
    this.cardCity = city;
    this.showNote = false;
    
  } else if (city.leading > 0) {
    this.showNote = true;
    this.city = null;
    this.weather = null;
  }
}
}
