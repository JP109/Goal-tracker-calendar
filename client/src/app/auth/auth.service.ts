import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthData } from "./auth-data.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
      private token: string;
      private authStatusListener = new Subject<boolean>()
      private isAuthenticated: boolean = false;
      private tokenTimer: any;
      private userId: string;

      constructor(private http: HttpClient, private router: Router){}

      getToken(){
            return this.token;
      }

      getIsAuth(){
            return this.isAuthenticated;
      }

      getUserId(){
            return this.userId;
      }

      getAuthStatusListener(){
            return this.authStatusListener.asObservable();
      }

      createUser(email: string, password: string){
            const authData: AuthData = {email: email, password: password};
            // console.log(authData)
            return this.http.post(`https://node-express-hosted-server-for-todo.onrender.com/api/users/signup`, authData)
            // return this.http.post(`http://localhost:3000/api/users/signup`, authData)
            .subscribe(res => {
                  // this.isLoading = false;
                  this.login(email, password);
                  console.log('Create user response:', res);
            }, error => {
                  // this.isLoading = false;
                  this.authStatusListener.next(false);
                  console.log(error);
            });
      }

      login(email: string, password: string){
            const authData: AuthData = {email: email, password: password};
            console.log(authData)
            this.http
                  .post(`https://node-express-hosted-server-for-todo.onrender.com/api/users/login`, authData)
                  // .post(`http://localhost:3000/api/users/api/users/login`, authData)
                  .subscribe(res => {
                        console.log(res);
                        const token = res['token'];
                        this.token = token;
                        if(token){
                              const expiresInDuration = res['expiresIn'];
                              this.setAuthTimer(expiresInDuration);
                              this.isAuthenticated = true; //Auth variable for components that will be initialized(opened) after login.
                              this.userId = res['userId'];
                              this.authStatusListener.next(true); //Auth variable for components that will be initialized before login(side menu).
                              const now = new Date();
                              const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                              this.saveAuthData(token, expirationDate);
                              this.router.navigate(['calendar']);
                        }
                        console.log('this.token', this.token)
                  }, error => {
                        this.authStatusListener.next(false);
                        console.log(error);
                  })
      }

      autoAuthUser(){
            const authInformation = this.getAuthData();
            if(!authInformation){
                  return;
            }
            const now = new Date();
            const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
            if(expiresIn > 0){
                  this.token = authInformation.token;
                  this.isAuthenticated = true;
                  this.setAuthTimer(expiresIn / 1000);
                  this.authStatusListener.next(true);
            }
      }

      logout(){
            this.token = null;
            this.isAuthenticated = false;
            this.authStatusListener.next(false);
            clearTimeout(this.tokenTimer);
            this.clearAuthData();
            this.router.navigate(['login']);
      }

      private setAuthTimer(duration: number){
            this.tokenTimer = setTimeout(()=>{
                  console.log('Timeout cleared')
                  this.logout();
            }, duration*1000)
      }

      private saveAuthData(token: string, expirationDate: Date){
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expirationDate.toISOString());
      }

      private clearAuthData(){
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
      }

      private getAuthData(){
            const token = localStorage.getItem('token');
            const expirationDate = localStorage.getItem('expiration');
            if(!token || !expirationDate){
                  return null;
            }
            return{
                  token: token,
                  expirationDate: new Date(expirationDate)
            }
      }
}