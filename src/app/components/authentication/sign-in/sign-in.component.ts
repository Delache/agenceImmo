import { AuthenticationService } from './../../../shared/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.initSigninForm();
  }
  initSigninForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmitSignInForm() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authenticationService.signInUser(email, password).then(
      (data) => {
        this.router.navigate(['/admin']);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }
}
