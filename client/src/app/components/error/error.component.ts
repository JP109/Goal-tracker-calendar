import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {

  // @Input() isPopup = false;
  @Input() errorMessage: string = 'Error!'

  constructor() { }

  ngOnInit(): void {
  }

}
