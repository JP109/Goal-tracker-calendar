import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  @Input() public todoData;
  @Input() public disabled: boolean = false;
  @Input() public value: number;
  @Input() public customClass: string = '';

  @Output() public onCheck = new EventEmitter();
  @Output() public onEdit = new EventEmitter();
  @Output() public onDelete = new EventEmitter();

  selectedOption: any = null;
  selectedIndex: number = null;
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isChecked = this.todoData.isChecked;
  }

  checkTodo(event){
    console.log('AAAAA', event.target.checked)
    if(!this.disabled){
      this.isChecked = event.target.checked;
      // this.isChecked = this.isChecked == true ? false : true;
      // console.log('ISCHECKED', this.isChecked)
      // this.onCheck.emit({"isChecked": this.isChecked, "todoData": this.todoData});
      this.onCheck.emit({"isChecked": event.target.checked, "todoData": this.todoData});
      // this.onCheck.emit(event.target.value);
      // this.selectedOption = event.target.value;
      // this.selectedIndex = this.todoData[event.target.value];
    }
  }
  
  // editTodo(todoId){
  //   this.onEdit.emit(todoId);
  // }

  deleteTodo(todoId){
    this.onDelete.emit(todoId);
  }

}
