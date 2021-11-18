import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor(private loggerService: LoggerService) {
  }

  ngOnInit(): void {
  }

  processForm(myForm: NgForm) {
    if(myForm.valid) {

    }
    this.loggerService.logger(myForm);
  }
}
