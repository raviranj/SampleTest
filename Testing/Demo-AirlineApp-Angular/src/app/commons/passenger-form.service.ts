import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PassengerFormService {
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    wheelchair: new FormControl('1'),
    withInfants: new FormControl('1'),
    inFlightShop: new FormControl('1'),
    seatNumber: new FormControl(''),
    name: new FormControl(''),
    passport: new FormControl('')


  })
  constructor() { }
}
