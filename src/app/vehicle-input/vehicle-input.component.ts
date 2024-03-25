import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Vehicle } from '../vehicle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-vehicle-input',
  templateUrl: './vehicle-input.component.html',
  styleUrls: ['./vehicle-input.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule]
})
export class VehicleInputComponent {


  @ViewChild("vehicleForm") vehicleForm!: NgForm;

  @Output() newDataEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<Vehicle>(
      "http://localhost:8080/vehicles",
      this.vehicleForm.value
    ).subscribe(data => this.newDataEvent.emit(data))
    }
}
