import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class TodoService{

      constructor(private http:HttpClient, private authService:AuthService){}

      getTodos = (date) => {
            // return [...this.todoList]
            console.log('getTodos called', date);
            // let queryParams = {"date": date};
            // let queryParams = new HttpParams().append("date",date);
            // const options = date ?
            // { params: new HttpParams().set('date', date) } : {};
            // return this.http.get("http://localhost:3000/api/todos", {params: queryParams})
            const params = new HttpParams()
                  .set('date', date);
            return this.http.get("https://node-express-hosted-server-for-todo.onrender.com/api/todos",{params: params})
      }
      
      getAllTodos = () => {
            return this.http.get("http://localhost:3000/api/todos")
      }

      addTodo = (todoObject) => {
            return this.http.post("http://localhost:3000/api/todos", todoObject)
      }

      editTodo = (todoObject) => {
            return this.http.put("https://node-express-hosted-server-for-todo.onrender.com/api/todos", todoObject)
      }

      checkTodo = (isChecked, id) => {
            // const checkParams = new HttpParams()
            //       .set('todoObject', 'BBBB');
            const body = { title: 'Angular PUT Request Example'};
            return this.http.put(`https://node-express-hosted-server-for-todo.onrender.com/api/todos?id=${id}&checked=${isChecked}`, body)
      }

      deleteTodo(todoId: string) {
            // this.http.delete("http://localhost:3000/api/todos/" + postId)
            //       .subscribe(() => {
            //       const updatedPosts = this.posts.filter(post => post.id !== postId);
            //       this.posts = updatedPosts;
            //       this.postsUpdated.next([...this.posts]);
            // });
            const params = new HttpParams()
                  .set('todoId', todoId);
            return this.http.delete("https://node-express-hosted-server-for-todo.onrender.com/api/todos/", {params: params})
      }
}