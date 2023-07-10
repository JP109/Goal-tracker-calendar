import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs'; 
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  @Input() calendarData: Array<any> = [];
  @ViewChild('modalRef') modalRef: ModalComponent;

  constructor() { }

  currentMonth = 0;
  currentMonthText = '';
  bufferCalendarData:any = [];
  displayCalendarData:any = [
    {weekData: []},
    {weekData: []},
    {weekData: []},
    {weekData: []},
    {weekData: []},
    {weekData: []},
    {weekData: []},
  ];

  monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  displayMonth(){
    this.currentMonthText = this.monthList[this.currentMonth];
  }
  

  increaseCurrentMonth(){
    this.currentMonth = this.currentMonth + 1;

    this.filterDatesByMonth(this.currentMonth);
    this.displayMonth();
    console.log("CAL DATA", this.bufferCalendarData)
  }

  decreaseCurrentMonth(){
    this.currentMonth = this.currentMonth - 1;

    this.filterDatesByMonth(this.currentMonth);
    this.displayMonth();
    console.log("CAL DATA", this.bufferCalendarData)
  }

  ngOnInit(): void {
    console.log('CalendarData', this.calendarData)
    this.bufferCalendarData = this.calendarData;
    
    this.filterDatesByMonth(this.currentMonth)

    this.displayMonth()
  }

  // filterDatesByMonth(currentMonth:any){
  //   this.bufferCalendarData = this.calendarData.filter((date)=>{
  //     return date.month===currentMonth
  //   })

  //   let weekIdx = 0;
  //   let weekData: any = [];

  //   console.log("bufferCalendarData", this.bufferCalendarData)
  
  //   this.bufferCalendarData = this.bufferCalendarData.map((date:any, index:number, bufferCalendarData:any)=>{
  //     if(date.day !=0){
  //       if(weekIdx==0 && index==0){
  //         for(let k=0; k<date.day; k++){
  //           weekData.push({})
  //         }
  //       }
  //       weekData.push(date)
  //       if(bufferCalendarData.length - 1 == index){
  //         for(let l=date.day; l<6; l++){
  //           weekData.push({})
  //         }
  //         this.displayCalendarData[weekIdx].weekData = weekData;
  //       }
  //     }else{
  //       this.displayCalendarData[weekIdx].weekData = weekData;
  //       weekIdx = weekIdx + 1;
  //       weekData = [];
  //       weekData.push(date)
  //     }
  //   })

  //   console.log('displayCalendarData', this.displayCalendarData)
  // }

  filterDatesByMonth(currentMonth: any) {
    this.bufferCalendarData = this.calendarData.filter((date) => {
      return date.month === currentMonth;
    });
  
    let weekIdx = 0;
    let weekData: any = [];
  
    console.log("bufferCalendarData", this.bufferCalendarData);
  
    this.bufferCalendarData = this.bufferCalendarData.map(
      (date: any, index: number, bufferCalendarData: any) => {
        if (date.day !== 0) {
          if (weekIdx === 0 && index === 0) {
            for (let k = 0; k < date.day; k++) {
              weekData.push({});
            }
          }
          weekData.push(date);
          if (bufferCalendarData.length - 1 === index) {
            for (let l = date.day; l < 6; l++) {
              weekData.push({});
            }
            this.displayCalendarData[weekIdx].weekData = weekData;
          }
        } else {
          if (weekData.length > 0) {
            this.displayCalendarData[weekIdx].weekData = weekData;
            weekIdx = weekIdx + 1;
            weekData = [];
          }
          weekData.push(date);
        }
      }
    );
  
    console.log("displayCalendarData", this.displayCalendarData);
  }
  

  openToDoModal = () =>{
    this.modalRef.showModal()
  }

  ngOnChanges(){
    
  }

}
