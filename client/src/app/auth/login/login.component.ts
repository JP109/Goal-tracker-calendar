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
  incorrect_credentials_error = false;  

  // userIsAuthenticated = false;
  isLoading: boolean = false;

  // private authListenerSubs: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    // this.authListenerSubs = this.authService
    // .getAuthStatusListener()
    // .subscribe(isAuthenticated => {
    //   this.userIsAuthenticated = isAuthenticated; //Not really required for now
    // });
  }

  ngOnDestroy(): void {
    // this.authListenerSubs.unsubscribe();
  }

  onSubmitForm = (form: NgForm) => {
    console.log('form', form.value);
    if(form.invalid){
      return
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }

}
