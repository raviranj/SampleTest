import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterLinkWithHref, ActivatedRoute, convertToParamMap } from '@angular/router';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { routes } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookPassengerComponent } from './book-passenger/book-passenger.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditPassengerComponent } from './admin-dashboard/edit-passenger/edit-passenger.component';
import { ManageAncillaryComponent } from './admin-dashboard/manage-ancillary/manage-ancillary.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { from } from 'rxjs';
import { SocialAuthService } from 'angularx-social-login';
import { AppModule } from './app.module';


describe('AppComponent Routing Testing', () => {
    let router: Router,
        component: AppRoutingModule,
        fixture: ComponentFixture<AppRoutingModule>,
        debugElement: DebugElement,
        location: Location;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, DashboardComponent, BookPassengerComponent, AdminDashboardComponent, EditPassengerComponent, ManageAncillaryComponent, ErrorPageComponent],
            providers: [{ provide: SocialAuthService }],
            imports: [RouterTestingModule.withRoutes(routes)]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        debugElement = fixture.debugElement;

        router.initialNavigation();

    });


    it('should test redirection to default path', async(() => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(location.path()).toBe('/');
        });
    }));

});