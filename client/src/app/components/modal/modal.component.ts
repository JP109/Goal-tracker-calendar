import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  // @Input() toDoList = [];
  @Input() date;
  isOpen: boolean = false;

  constructor() { }

  todoList: Todo[] = [
    {title:'Cat', description:'Lorem Ipsum...', checked: false}, 
    {title:'Dog', description:'Lorem Ipsum...', checked: false}, 
    {title:'Mouse', description:'Lorem Ipsum...', checked: true}
  ];
  
  ngOnInit(): void {
  }

  showModal(){
    this.isOpen = true;
  }

  hideModal(){
    this.isOpen = false;
  }

  addTodo(todoForm: NgForm){
    // console.log('todoForm', todoForm.value)
    const todo: Todo = {
      title: todoForm.value.title,
      description: todoForm.value.description,
      checked: false
    }
    this.todoList.push(todo);
    // console.log(this.todoList, todo)
  }

}
