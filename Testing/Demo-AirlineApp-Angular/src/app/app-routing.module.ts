import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookPassengerComponent } from './book-passenger/book-passenger.component';
import { ChangeAncillaryServiceComponent } from './change-ancillary-service/change-ancillary-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditPassengerComponent } from './admin-dashboard/edit-passenger/edit-passenger.component';
import {
  ManageAncillaryComponent
} from './admin-dashboard/manage-ancillary/manage-ancillary.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "bookpassenger/:flightId", component: BookPassengerComponent, canActivate: [AuthGuard] },

  { path: "adminDashboard", component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: "display/:flightId", component: EditPassengerComponent, canActivate: [AuthGuard] },
  { path: "ancillary/:flightId", component: ManageAncillaryComponent, canActivate: [AuthGuard] },
  { path: "**", component: ErrorPageComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
