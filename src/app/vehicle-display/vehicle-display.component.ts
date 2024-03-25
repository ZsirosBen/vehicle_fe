import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Vehicle } from '../vehicle';


@Component({
  selector: 'app-vehicle-display',
  templateUrl: './vehicle-display.component.html',
  styleUrls: ['./vehicle-display.component.scss'],
  standalone: true,
  imports: [MatCardModule,
    MatButtonModule]
})
export class VehicleDisplayComponent {

  @Input() vehicle: Vehicle = new Vehicle(0, "", "", "", 0);

}
