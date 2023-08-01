import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() date: string = '';
  todoList: any = [];
  isOpen: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // this.todoList = this.todoService.getTodos();


    // this.todoService.getTodos(this.date).subscribe(data => {
    //   this.todoList = data['todos'];
    // })
  }

  showModal(currentDate){
    this.todoList = [];
    this.isOpen = true;
    let dateStringTrimmed = currentDate.replace(/\s/g,'')
    console.log('Current date', this.date, currentDate)
    this.todoService.getTodos(dateStringTrimmed).subscribe(data => {
      this.todoList = data['todos'];
    })
  }

  hideModal(){
    this.isOpen = false;
  }

  addTodo(todoForm: NgForm){
    // console.log('todoForm', todoForm.value)
    const todo: Todo = {
      title: todoForm.value.title,
      description: todoForm.value.description,
      date: this.date,
      checked: false
    }
    console.log(todo)
    // this.todoList.push(todo);
    this.todoService.addTodo(todo);
  }

}
