import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo";
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  //providers: [TodoService]
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  allTodos: Todo[]=[];
  todo: Todo = new Todo("","");
  name: string = "";
  content: string = "";

  ngOnInit(): void {
    this.allTodos = this.todoService.getAll();
  }

  ngAdd() : void {
    this.todoService.add(this.todo);
    this.todoService.log();

    this.todo = new Todo("", "");
  }

  ngRemove(todoToRemove: Todo) : void {
    this.todoService.remove(todoToRemove);
  }
}
