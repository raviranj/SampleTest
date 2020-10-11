import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { SessionManagent } from './commons/service.sessionManagment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookPassengerComponent } from './book-passenger/book-passenger.component';
import { ChangeAncillaryServiceComponent } from './change-ancillary-service/change-ancillary-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightReducer } from './flight-state/flight.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FlightEffects } from './flight-state/flight.effect';
import { PassengerEffects } from './passenger-state/passenger.effect';
import {  PassengerReducer } from './passenger-state/passenger.reducer';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditPassengerComponent } from './admin-dashboard/edit-passenger/edit-passenger.component';
import { ManageAncillaryComponent } from './admin-dashboard/manage-ancillary/manage-ancillary.component';
import { PassengerFormService } from './commons/passenger-form.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from  './material/material.module';
import { AuthGuard } from './guard/auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    BookPassengerComponent,
    ChangeAncillaryServiceComponent,
    AdminDashboardComponent,
    EditPassengerComponent,
    ManageAncillaryComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    MatTableModule,
    EffectsModule.forRoot([FlightEffects, PassengerEffects]),
    StoreModule.forRoot({ passengerState: PassengerReducer, flightState: FlightReducer }),
    NgbModule,
    ReactiveFormsModule,
    MatDialogModule,
    MaterialModule,
  ],
  providers: [SessionManagent,PassengerFormService,AuthGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '496194914352-9ol1t2im8upjk3b1jcmbo725sqmtobmg.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
