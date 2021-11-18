import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cv} from "../../model/cv";
import {LoggerService} from "../../../services/logger.service";
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  dataFromSon : Cv | null = null;

  constructor(
    private loggerService: LoggerService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.loggerService.logger('Hey je suis CV Component');
  }

  processDataFromSon(data : any) {
    //console.log("test CV", data);
    this.dataFromSon = data;
    this.todoService.log();
  }

}
