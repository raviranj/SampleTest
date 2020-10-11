import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { SessionManagent } from '../commons/service.sessionManagment';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  asAdmin: boolean = true;
  userId: string;
  password: string;

  constructor(private authService: SocialAuthService, private session: SessionManagent
    , private routers: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.session.saveInLocal('currentUser', this.user.firstName);
      this.session.saveInLocal('photoUrl', this.user.photoUrl);
      this.routers.navigateByUrl(this.user ? '/dashboard' : '/home');
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.session.saveInLocal('role', "staff");
  }

  signInAdmin(loginDetails: NgForm) {
    let dummyUserId = "admin";
    let dummyPassword = "admin";
    if (dummyUserId === loginDetails.value.userId && dummyPassword === loginDetails.value.password) {
      this.session.saveInLocal('currentUser', "Admin");
      this.session.saveInLocal('role', "admin");
      this.routers.navigateByUrl('/adminDashboard');
    }
  }
  switchUser(user: string) {
    if (user === "admin") {
      this.asAdmin = true;
    } else {
      this.asAdmin = false;
    }
  }
}
