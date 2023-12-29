import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=';
  apiUrl = '&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric';
  cityName:string=" "
  constructor(private httpClint:HttpClient) { }

getApiData(city:any){
  let url=this.apiKey + city + this.apiUrl
  return this.httpClint.get( url)
}


}
