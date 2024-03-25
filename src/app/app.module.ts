import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { HttpClientModule } from  '@angular/common/http';
import { VehicleInputComponent } from './vehicle-input/vehicle-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    VehicleDisplayComponent,
    HttpClientModule,
    FormsModule,
    VehicleInputComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
