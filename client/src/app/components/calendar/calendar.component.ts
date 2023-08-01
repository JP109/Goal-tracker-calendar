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

  selectedDate;

  displayMonth(){
    this.currentMonthText = this.monthList[this.currentMonth];
  }
  
  increaseCurrentMonth(){
    if(this.currentMonth <=11){
      this.currentMonth = this.currentMonth + 1;
  
      this.filterDatesByMonth(this.currentMonth);
      this.displayMonth();
      console.log("CAL DATA", this.bufferCalendarData)  
    }
  }

  decreaseCurrentMonth(){
    if(this.currentMonth >= 0){
      this.currentMonth = this.currentMonth - 1;
  
      this.filterDatesByMonth(this.currentMonth);
      this.displayMonth();
      console.log("CAL DATA", this.bufferCalendarData)
    }
  }

  ngOnInit(): void {
    this.bufferCalendarData = this.calendarData;
    
    this.filterDatesByMonth(this.currentMonth)

    this.displayMonth()
  }

  filterDatesByMonth(currentMonth: any){
    this.bufferCalendarData = this.calendarData.filter((date) => {
      return date.month === currentMonth;
    });

    this.displayCalendarData = [
      {weekData: []},
      {weekData: []},
      {weekData: []},
      {weekData: []},
      {weekData: []},
      {weekData: []},
      {weekData: []},
    ];

    let startEmptyDates = []
    let endEmptyDates = []

    for(let l = this.bufferCalendarData[0].day; l < 6; l++){
      startEmptyDates.push({});
    }
    this.bufferCalendarData = [...startEmptyDates, ...this.bufferCalendarData];

    let endWeekDay = this.bufferCalendarData.length%7;

    if(endWeekDay !=0){
      for(let l = endWeekDay; l < 7; l++){
        endEmptyDates.push({});
      }
    }
    this.bufferCalendarData = [...this.bufferCalendarData, ...endEmptyDates];

    let weekId = 0;
    for(let m=0; m<this.bufferCalendarData.length; m=m+7){
      this.displayCalendarData[weekId].weekData = [...this.bufferCalendarData.slice(m, m+7)];
      weekId = weekId + 1;
    }
  }

  openToDoModal = (date) =>{
    if(date===undefined){
      return
    }
    this.selectedDate = date;
    this.modalRef.showModal(date)
    console.log('Type of date Cal:', typeof(date))
  }

  ngOnChanges(){
    
  }

}
