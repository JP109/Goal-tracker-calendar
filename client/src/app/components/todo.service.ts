import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class TodoService{
      private todosUpdatedListener = new Subject<Todo[]>();

      constructor(private http:HttpClient, private authService:AuthService){}

      getTodosUpdatedListener(){
            return this.todosUpdatedListener.asObservable();
      }

      getTodos = (date) => {
            console.log('getTodos called', date);
            const params = new HttpParams()
                  .set('date', date);
            return this.http.get(`https://node-express-hosted-server-for-todo.onrender.com/api/todos`,{params: params})
      }
      
      getAllTodos = () => {
            return this.http.get(`https://node-express-hosted-server-for-todo.onrender.com/api/todos`)
      }

      addTodo = (todoObject) => {
            this.todosUpdatedListener.next();
            return this.http.post(`https://node-express-hosted-server-for-todo.onrender.com/api/todos`, todoObject)
      }

      editTodo = (todoObject) => {
            this.todosUpdatedListener.next();
            return this.http.put(`https://node-express-hosted-server-for-todo.onrender.com/api/todos`, todoObject)
      }

      checkTodo = (isChecked, id) => {
            const body = { title: 'PUT Request Example'};
            console.log('isChecked', isChecked)
            return this.http.put(`https://node-express-hosted-server-for-todo.onrender.com/api/todos?id=${id}&checked=${isChecked}`, body)
            // return this.http.put(`https://node-express-hosted-server-for-todo.onrender.com/api/todos?id=${id}&checked=${isChecked}`, isChecked)
      }

      deleteTodo(todoId: string) {
            this.todosUpdatedListener.next();
            const params = new HttpParams()
                  .set('todoId', todoId);
            return this.http.delete(`https://node-express-hosted-server-for-todo.onrender.com/api/todos`, {params: params})
      }
}