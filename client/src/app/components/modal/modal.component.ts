import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() toDoList = [];
  @Input() date;
  isOpen: boolean = false;

  constructor() { }

  todoList = [
    {label:'Cat', text:'Lorem Ipsum...', id: 'Cat', value: 'Cat', checked: false, disabled: false}, 
    {label:'Dog', text:'Lorem Ipsum...', id: 'Dog', value: 'Dog', checked: false, disabled: true}, 
    {label:'Mouse', text:'Lorem Ipsum...', id: 'Mouse', value: 'Mouse', checked: true, disabled: false}
  ];
  
  ngOnInit(): void {
  }

  showModal(){
    this.isOpen = true;
  }

  hideModal(){
    this.isOpen = false;
  }

  addTodo(){
    const todo = {
      title: 'Dummy title',
      description: 'Dummy description',
      checked: false
    }
  }

}
