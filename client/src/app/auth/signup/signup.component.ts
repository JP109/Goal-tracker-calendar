import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  isLoading: boolean = false;

  userName = "";
  password = "";
  user = {};
  incorrect_credentials_error = false;  

  //Shortcut to inject a service and instantiate it at the same time
  constructor(
    // private validationService: validationService, 
    // private router: Router, 
    // private authenticationService:authenticationService
    public authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    // this.validationService.fetchData().subscribe(data=>{
    //   this.valData = data;
    // })
  }

  onSubmitForm = (form: NgForm) => {
    if(form.invalid){
      return;
    }else{
      this.isLoading = true;
      this.authService.createUser(form.value.username, form.value.password);
      this.router.navigate(['calendar']);
    }
  }

}
