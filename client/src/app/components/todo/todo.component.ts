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

  @Output() public change = new EventEmitter();

  selectedOption: any = null;
  selectedIndex: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event){
    if(!this.disabled){
      this.change.emit(event.target.value);
      this.selectedOption = event.target.value
      this.selectedIndex = this.todoData[event.target.value];
    }
  }

}
