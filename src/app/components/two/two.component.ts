import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor() { }

  two = '';

  ngOnInit(): void {
  }
  changeValue() {
      this.two = "test valeur";
  }
}
