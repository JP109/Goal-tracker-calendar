import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {

  // constructor() { }

  // ngOnInit(): void {
  // }

  userName = "";
  password = "";
  user = {};
  incorrectCredentialsError = false;  
  goToSignup: boolean = false;

  userIsAuthenticated = false;
  signupFailedError: boolean = false;
  isLoading: boolean = false;

  private authListenerSubs: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.isLoading = isAuthenticated;
      this.signupFailedError = true;
      this.incorrectCredentialsError = true;
    });
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

  onLogin = (form: NgForm) => {
    console.log('form', form.value);
    if(form.invalid){
      return
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }

  onSignup = (form: NgForm) => {
    if(form.invalid){
      return;
    }else{
      this.isLoading = true;
      this.authService.createUser(form.value.username, form.value.password);
      // .subscribe(res => {
      //   this.isLoading = false;
      //   this.authService.login(form.value.username, form.value.password);
      //   console.log('Create user response:', res);
      // }, error => {
      //   this.isLoading = false;
      //   console.log(error);
      // });
    }
  }

  flipCard = () => {
    this.goToSignup = !this.goToSignup;
    this.incorrectCredentialsError = false;
    this.signupFailedError = false;
  }

  setFlipClass(){
    if(this.goToSignup){
      return 'perspective(600px) rotateY(0deg)'
    }else{
      return null
    }
  }

}
