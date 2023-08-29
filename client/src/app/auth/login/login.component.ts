import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  userName = "";
  password = "";
  user = {};
  incorrect_credentials_error = false;  

  //Shortcut to inject a service and instantiate it at the same time
  constructor(
    // private validationService: validationService, 
    // private router: Router, 
    // private authenticationService:authenticationService
    ) {}

  ngOnInit(): void {
    // this.validationService.fetchData().subscribe(data=>{
    //   this.valData = data;
    // })
  }

  onSubmitForm = (form: NgForm) => {
    // if (this.valData.some(user => user.name === form.value.username && user.password === form.value.password)) {
    //   this.authenticationService.authenticate();
    //   localStorage.setItem(`${form.value.username}`,`${form.value.password}`)
    //   this.router.navigate(["/"])
    //   console.log("ACCESS GRANTED!")
    // }
    // else{
    //   console.log("ACCESS DENIED!")
    //   this.incorrect_credentials_error = true;
    // }
  }

}
