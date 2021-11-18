import {Injectable} from "@angular/core";
import {Todo} from "../todo/model/todo";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  constructor(private loggerService: LoggerService) {
  }

  allTodos: Todo[] = [];

  log(): void {
    this.allTodos.forEach((todo) => {
      this.loggerService.logger("todo :: " + todo.name + " -- " + todo.content);
    });
  }

  add(todo: Todo): void {
    this.loggerService.logger('on ajoute un TODO : ' + todo.name);
    this.allTodos.push(todo);
  }

  remove(todo: Todo): void {
    this.loggerService.logger('on supprime un TODO : ' + todo.name);
    const index = this.allTodos.indexOf(todo);
    if (index !== -1) {
      this.allTodos.splice(index, 1);
    }
  }

  getAll(): Todo[] {
    this.loggerService.logger('on recupere tous les TODO');
    return this.allTodos;
  }
}
