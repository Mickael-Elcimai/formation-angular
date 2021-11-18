import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  // attributs : etat classe
  // methodes : fonctionnalites

  @Input() isHidden = false;
  myVar = "contenu de myVar";
  message = "";

  ngOnInit(): void {
  }

  ngOnChange(msg: string) {
    this.message = msg;
  }

  ngOnClick() {
    this.isHidden = !this.isHidden;
  }
}
