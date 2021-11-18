import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../../model/cv";
import {CvService} from "../../services/cv.service";

@Component({
  selector: 'app-elem',
  templateUrl: './elem.component.html',
  styleUrls: ['./elem.component.css']
})
export class ElemComponent implements OnInit {

  //@Output() sendDataToFather = new EventEmitter;

  @Input() cv : Cv | null = null;

  constructor(private cvService : CvService) {
  }

  ngOnInit(): void {
  }

  send() {
    if(this.cv) {
      this.cvService.selectCv(this.cv);
    }

    //console.log("click", this.cv);
    //this.sendDataToFather.emit(this.cv);
  }
}
