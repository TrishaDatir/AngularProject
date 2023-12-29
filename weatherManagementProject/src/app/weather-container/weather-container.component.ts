import { Component } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent {
city:string= ""
weatherData: any = {}; 
showhid:boolean=false;
serchCity:any;
errorMessage = '';

constructor(private weatherApiService:WeatherApiService){}


fetchdata(){

  if (this.city.trim() !== '') {
    this.weatherApiService.getApiData(this.city).subscribe( (data: any) => {
        this.weatherData = data;
        this.errorMessage = ''; 
      },
      (error) => {
        this.errorMessage = 'City not found! Please enter a valid city name.'; 
        this.weatherData = null; 
      }
    );
  } else {
    this.errorMessage = 'Please enter a city name.'; 
    this.weatherData = null; 
  }
}



 // const city = event.target.value
//  var cityName=city.toUpperCase()
//   console.log("cityName",cityName);
  
//   this.weatherApiService.getApiData(cityName).subscribe(res=>{
//     this.weatherData=res;
//     this.serchCity=this.weatherData.name
//     console.log("weather data",this.weatherData);
   
//   })

//   if(this.weatherData){
//     this.showhid=true
//   }
 
// }




}