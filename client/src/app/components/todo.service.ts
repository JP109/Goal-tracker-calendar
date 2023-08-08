import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";
import { HttpClient, HttpParams } from "@angular/common/http";
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
            console.log('getTodos called', date);
            // let queryParams = {"date": date};
            // let queryParams = new HttpParams().append("date",date);
            // const options = date ?
            // { params: new HttpParams().set('date', date) } : {};
            // return this.http.get("http://localhost:3000/api/todos", {params: queryParams})
            const params = new HttpParams()
                  .set('date', date);
            return this.http.get("http://localhost:3000/api/todos/",{params: params})
      }

      addTodo = (todoObject) => {
            return this.http.post("http://localhost:3000/api/todos", todoObject)
      }

      editTodo = (todoObject) => {
            return this.http.put("http://localhost:3000/api/todos", todoObject)
      }

      checkTodo = (isChecked, id) => {
            // const checkParams = new HttpParams()
            //       .set('todoObject', 'BBBB');
            const body = { title: 'Angular PUT Request Example'};
            return this.http.put(`http://localhost:3000/api/todos?id=${id}&checked=${isChecked}`, body)
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
            return this.http.delete("http://localhost:3000/api/todos/", {params: params})
      }
}