import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {first, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  private readonly appID = 'a81a730a0edf521e8d64cb4c4be4c671';
  constructor(public http: HttpClient) {
  }
  getWeatherData(city, code) {
    return this.http.get(this.forcastURL + city + ',' + code + '&APPID=' + this.appID +'&units=metric')

  }
  getWeather(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.baseURL}${city}&units=${metric}&APPID=${this.appID}`).pipe((first()));
  }

  getForecast(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.forcastURL}${city}&units=${metric}&APPID=${this.appID}`)
      .pipe(first(), map((weather) => weather['list']));
  }
}
