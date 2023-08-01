import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodoService{
      // private todoList: Todo[] = [];
      // private todoList: Todo[] = [
      //       {title:'Cat', description:'Lorem Ipsum...', checked: false}, 
      //       {title:'Dog', description:'Lorem Ipsum...', checked: false}, 
      //       {title:'Mouse', description:'Lorem Ipsum...', checked: true}
      //     ];;
      constructor(private http:HttpClient){}

      getTodos = (date) => {
            // return [...this.todoList]
            console.log('getTodos called');
            let queryParams = {"date": date};
            return this.http.get("http://localhost:3000/api/todos", {params: queryParams})
      }

      addTodo = (todoObject) => {
            this.http.post("http://localhost:3000/api/todos", todoObject)
                  .subscribe(responseData => {
                        console.log('POST response', responseData);
                  })
      }
}