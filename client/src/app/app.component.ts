import { Component } from '@angular/core';
import { Moment } from 'moment';
import { eachDayOfInterval } from 'date-fns'
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'goal-tracker';

  formattedDatesArray: any = [];

  constructor(private authService: AuthService){}

  ngOnInit(){
    // this.formattedDatesArray = this.getSortedDatesInRange(new Date(2023,0,1), new Date(2024,0,0));
    this.authService.autoAuthUser();
  }

  // getSortedDatesInRange(startDate: Date, endDate: Date) {
  //   const dateArray = eachDayOfInterval({
  //     start: new Date(startDate),
  //     end: new Date(endDate)
  //   })

  //   const sortedDateArray = dateArray.map((date, idx)=>{
  //     const formattedDate = {
  //       date: date.getDate(), 
  //       month: date.getMonth(), 
  //       year: date.getFullYear(), 
  //       day: date.getDay(), 
  //       dateString: date.toDateString(),
  //       todos: []  
  //     }
  //     return formattedDate
  //   })

  //   return sortedDateArray
  // } 
}
