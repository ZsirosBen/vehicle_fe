import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInputComponent } from './vehicle-input.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VehicleInputComponent', () => {
  let component: VehicleInputComponent;
  let fixture: ComponentFixture<VehicleInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [VehicleInputComponent, HttpClientTestingModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(VehicleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
