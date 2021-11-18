import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Output() sendDataToDad = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  sayCoucou() {
    this.sendDataToDad.emit('Hello daddy !');
  }

}
