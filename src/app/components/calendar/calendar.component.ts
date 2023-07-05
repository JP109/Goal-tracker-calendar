import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  @Input() calendarData: Array<any> = [];

  constructor() { }

  currentMonth = 0;
  bufferCalendarData:any = [];
  displayCalendarData:any = [
    {weekData: []},
    {weekData: []},
    {weekData: []},
    {weekData: []},
    {weekData: []},
    {weekData: []},
    {weekData: []},
  ]
  

  increaseCurrentMonth(){
    this.currentMonth = this.currentMonth + 1;

    this.filterDatesByMonth(this.currentMonth);
    console.log("CAL DATA", this.bufferCalendarData)
  }

  decreaseCurrentMonth(){
    this.currentMonth = this.currentMonth - 1;

    this.filterDatesByMonth(this.currentMonth);
    console.log("CAL DATA", this.bufferCalendarData)
  }

  ngOnInit(): void {
    console.log('CalendarData', this.calendarData)
    this.bufferCalendarData = this.calendarData;
    
    this.filterDatesByMonth(this.currentMonth)
  }

  filterDatesByMonth(currentMonth:any){
    this.bufferCalendarData = this.calendarData.filter((date)=>{
      return date.month===currentMonth
    })

    let weekIdx = 0;
    let weekData: any = [];
  
    this.bufferCalendarData = this.bufferCalendarData.map((date:any, index:number, bufferCalendarData:any)=>{
      // if(date.day != 0){
      //   if(weekIdx==0 && index==0){
      //     for(let k=0; k<date.day; k++){
      //       weekData.push({})
      //     }
      //   }
      //   weekData.push(date)
      //   if(weekData==0 && date.day==6){
      //     weekIdx = weekIdx + 1;
      //   }
      // }else{
      //   if(weekIdx == 0){
      //     weekData.push(date)
      //   }else{
      //     this.displayCalendarData[weekIdx].weekData = weekData;
      //     weekIdx = weekIdx + 1;
      //     weekData = [];
      //     weekData.push(date)
      //   }
      // }



      // const weekData = {
        
      // }
      // return weekData
      // let weekData: any = [];
      // weekData = [...weekData, date]
      // this.displayCalendarData[index].weekData.push(date) 

      // this.displayCalendarData[index].weekData = this.bufferCalendarData.filter((date)=>{
      //   date.day > 3
      // })     



      // if(weekIdx===0){
      //   weekData.push(date)
      //   if(date.day===6){
      //     this.displayCalendarData[weekIdx].weekData = weekData;
      //     weekIdx = weekIdx + 1;
      //     weekData = [];
      //   }
      // }else{



        if(date.day !=0){
          if(weekIdx==0 && index==0){
            for(let k=0; k<date.day; k++){
              weekData.push({})
            }
          }
          weekData.push(date)
        }else{
          // if(weekIdx==0){
          //   if(date.dat !=6){
          //     weekData.push(date);
          //   }
          //   if(date.day==6){
          //     weekData.push(date);
          //     this.displayCalendarData[weekIdx] = weekData
          //   }
          // }
          // else{
            this.displayCalendarData[weekIdx].weekData = weekData;
            weekIdx = weekIdx + 1;
            weekData = [];
            weekData.push(date)
          // }
        }



      // }

    })

    console.log("AAAAAAAAAA", this.displayCalendarData)


    // this.displayCalendarData[]
  }

  // ngOnChanges(){
  //   this.calendarData = this.calendarData.filter((date)=>{
  //     return date.month===this.currentMonth
  //   })
  // }

}
