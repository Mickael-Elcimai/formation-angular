import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  @Input() defaultColor = 'red';
  @Input() defaultFont = 'verdana';
  @Input() defaultSize = 20;

  color : string = '';
  font : string = '';
  size : number = 20;

  constructor(private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    //this.color = this.defaultColor;
    this.activatedRoute.params.subscribe((params)=> {
      this.color = params['couleur'];
      this.font = params['font'];
      this.size = params['size'];
    });
  }
}
