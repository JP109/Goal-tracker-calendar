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
    console.log('Current date', this.date, dateStringTrimmed)

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
      id: null,
      title: todoForm.value.title,
      description: todoForm.value.description,
      date: this.date,
      checked: false
    }
    console.log(todo)
    // this.todoList.push(todo);
    this.todoService.addTodo(todo).subscribe(responseData=>{
        console.log('POST response', responseData);
        const id = responseData['todoId'];
        todo.id = id;
        this.todoList.push(todo);
        // this.todosUpdated.next([...this.todoList]);
    });
  }

  checkTodo(todo){
    console.log('todo in checkTodo:', todo)
    this.todoService.checkTodo(todo.isChecked, todo.todoData._id).subscribe(data=>{
      console.log(data)
    });
  }

  // editTodo(todoId){
  //   console.log('Edit todo:', todoId)
  //   this.todoService.editTodo().subscribe(responseData=>{
  //     console.log('PUT response', responseData);
  //   })
  // }

  deleteTodo(todoId){
    console.log('Delete todo:', todoId)
    this.todoService.deleteTodo(todoId).subscribe(data => {
      console.log(this.todoList)
      this.todoList = this.todoList.filter(todo => todo._id !== todoId);
      // this.todoList = updatedTodoList;
      // this.postsUpdated.next([...this.posts]);
    })
  }

}
