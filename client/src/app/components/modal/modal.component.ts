import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() toDoList = [];
  isOpen: boolean = false;

  constructor() { }
  
  ngOnInit(): void {
  }

  showModal(){
    this.isOpen = true;
  }

  hideModal(){
    this.isOpen = false;
  }

  addTodo(){
    
  }

}
