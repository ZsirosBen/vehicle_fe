import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-input',
  templateUrl: './vehicle-input.component.html',
  styleUrls: ['./vehicle-input.component.scss']
})
export class VehicleInputComponent {


  @ViewChild("vehicleForm") vehicleForm!: NgForm;

  @Output() newDataEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<Vehicle>(
      "http://localhost:8080/vehicles",
      this.vehicleForm.value
    )
    }
}
