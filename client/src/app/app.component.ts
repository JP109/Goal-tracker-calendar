import { Component } from '@angular/core';
import { Moment } from 'moment';
import { eachDayOfInterval } from 'date-fns'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'goal-tracker';

  dates = [
    {
      date: '1'
    },
    {
      date: '2'
    },
    {
      date: '3'
    },
    {
      date: '4'
    },
    {
      date: '5'
    },
    {
      date: '6'
    },
  ];

  datesArray: Date[] = [];

  formattedDatesArray: any = [];

  ngOnInit(){
    // this.datesArray = this.getDatesInRange(new Date(2023,0,1), new Date(2024,0,0))
    this.formattedDatesArray = this.getSortedDatesInRange(new Date(2023,0,1), new Date(2024,0,0))
    // console.log('datesOGArray', this.datesArray)
  }

  // getDatesInRange(startDate: Date, endDate: Date) {
  //   return eachDayOfInterval({
  //     start: new Date(startDate),
  //     end: new Date(endDate)
  //   })
  // } 

  getSortedDatesInRange(startDate: Date, endDate: Date) {
    const dateArray = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate)
    })
    console.log("dateArray", dateArray)

    const sortedDateArray = dateArray.map((date, idx)=>{
      const formattedDate = {date: date.getDate(), month: date.getMonth(), year: date.getFullYear(), day: date.getDay(), dateString: date.toDateString()}
      return formattedDate
    })

    return sortedDateArray
  } 

  // getMonthWiseDates(sortedDateArray){
  //   const monthWiseDateArray = sortedDateArray.map((date, ind)=>{

  //   })
  // }
}
