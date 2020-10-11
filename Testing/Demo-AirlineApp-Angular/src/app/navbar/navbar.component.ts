import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../commons/passenger-detailss.service';
import { SocialAuthService } from 'angularx-social-login';
import { SessionManagent } from '../commons/service.sessionManagment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string;
  photoUrl: string;
  userRoal: string;
  passengerWithAncillary:Passenger[];
  enableAdminBack:boolean=false;

   constructor(private router: Router, private authService: SocialAuthService, private session: SessionManagent) { 
    this.userName = this.session.data['currentUser'];
    this.photoUrl = this.session.data['photoUrl'];
  
  }

  ngOnInit(): void {
    this.userRoal=this.session.data['role'];
    if(this.userRoal==="admin"){
      this.enableAdminBack=true;
    }
   }

  signOut(): void {
    this.authService.signOut(true);
    this.session.removeFromLocal();
    this.router.navigate(['/home']);
  }
}
