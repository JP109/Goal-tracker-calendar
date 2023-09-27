import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() date: string = '';
  todoList: any = [];
  // private todosUpdated = new Subject<Todo[]>();
  isOpen: boolean = false;
  isLoading: boolean = false;
  dateStringTrimmed: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  showModal(currentDate){
    this.todoList = [];
    this.isOpen = true;
    this.dateStringTrimmed = currentDate.replace(/\s/g,'')
    console.log('Current date', this.date, this.dateStringTrimmed)

    this.isLoading = true;
    this.todoService.getTodos(this.dateStringTrimmed).subscribe(data => {
      this.todoList = data['todos'];
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    })
  }

  hideModal(){
    this.isOpen = false;
  }

  addTodo(todoForm: NgForm){
    // console.log('todoForm', todoForm.value)
    const todo: Todo = {
      id: null,
      title: todoForm.value.title,
      description: todoForm.value.description,
      date: this.date,
      checked: false
    }
    console.log(todo)
    // this.todoList.push(todo);
    this.isLoading = true;
    this.todoService.addTodo(todo).subscribe(responseData=>{
        console.log('POST response', responseData);
        const id = responseData['todoId'];
        todo.id = id;
        // this.todoList.push(todo);
        // this.isLoading = false;
        this.todoService.getTodos(this.dateStringTrimmed).subscribe(data => {
          this.todoList = data['todos'];
          this.isLoading = false;
        }, error => {
          console.log(error);
          this.isLoading = false;
        })
        // this.todosUpdated.next();
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  checkTodo(todo){
    console.log('todo in checkTodo:', todo)
    this.isLoading = true;
    this.todoService.checkTodo(todo.isChecked, todo.todoData._id).subscribe(data=>{
      console.log(data)
      // this.isLoading = false;
      
      // this.isLoading = true;
      this.todoService.getTodos(this.dateStringTrimmed).subscribe(data => {
        this.todoList = data['todos'];
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.isLoading = false;
      })
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  deleteTodo(todoId){
    console.log('Delete todo:', todoId)
    this.isLoading = true;
    this.todoService.deleteTodo(todoId).subscribe(data => {
      console.log(this.todoList)
      this.todoList = this.todoList.filter(todo => todo._id !== todoId);
      this.isLoading = false;
      // this.todoList = updatedTodoList;
      // this.postsUpdated.next([...this.posts]);
    }, error => {
      this.isLoading = false;
      console.log(error);
    })
  }

}
