
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'vehicles-fe';


  vehicles: Vehicle[] = []

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get<Vehicle[]>("http://localhost:8080/vehicles")
    .subscribe(
    
      data => {
        console.log("DATA: " + data)
        this.vehicles = data}
    )
  }

  appendData(newVehicle: Vehicle): void {
    this.vehicles.push(newVehicle);
    }
  
}
