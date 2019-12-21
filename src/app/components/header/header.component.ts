import { Router } from '@angular/router';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        if (userSession) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
  }
  onSignOut() {
    this.authService.SignOutUser();
    this.router.navigate(['home']);

  }
}
