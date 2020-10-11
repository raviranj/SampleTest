import { TestBed } from '@angular/core/testing';

import { FlightService } from './flight.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Flight, Passenger } from './passenger-detailss.service';

fdescribe('FlightService', () => {
  let service: FlightService,
    httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService],
    });
    service = TestBed.get(FlightService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be fetch list of flights', () => {
    service.getAllFlights().subscribe((response) =>
      expect(response.length).toBeTruthy(3));

    const request = httpMock.expectOne(`${service.serverUrl}flightList`);
    expect(request.request.method).toBe('GET');
  });

  it('should test HttpClient GET', () => {
    const flightDetails: Flight[] = [{
      "id": "Vistara-1", "flightName": "Vistara", "from": "Hyderabad", "to": "Chennai",
      "ancillaryService": { "meal": "Vegggg", "weight": "19Kg" }
    }, {
      "id": "Indigo-1", "flightName": "Indigo", "from": "Bangalore", "to": "Delhi",
      "ancillaryService": { "meal": "Veg", "weight": "12Kg" }
    },
    {
      "id": "AirAsia-1", "flightName": "AirAsia", "from": "Delhi", "to": "Mumbai",
      "ancillaryService": { "meal": "Vegggg", "weight": "17Kg" }
    }];

    service.getAllFlights().subscribe((data) => {
      expect(flightDetails).toBe(data)
    });

    const req = httpMock.expectOne(service.serverUrl + 'flightList');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(flightDetails);

  });

  it('should add POST and return added post', () => {
    const postPasenger: Passenger = { "id": "1", "flightId": "Indigo-1", "seatNumber": "B0", "wheelchair": true, "reserved": true, "checkIn": true, "withInfants": false, "name": "Manas-Indigo", "inFlightShop": true, "address": "Mumbai", "passport": "12345" };

    service.addPassenger(postPasenger).subscribe((addPost) => {
      expect(addPost).toBe(postPasenger);
    });
    const req = httpMock.expectOne(service.serverUrl + 'passengerList/');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(postPasenger);
  });


});
