import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.css']
})
export class TestObservablesComponent implements OnInit {

  @Input() timer = 1000;
  @Input() nbRepeat = 8;
  imgs = ['testeur1.png', 'testeur2.png', 'rotating_card_profile.png', 'rotating_card_profile2.png', 'rotating_card_profile3.png', 'tim_logo.png'];
  imagePath : string = "";

  constructor(private toastr: ToastrService) {
    const observable = new Observable((observer)=>{

      let end = 0;
      let i = 0;
      setInterval(() =>{
        if(end === this.nbRepeat) {
          observer.complete();
        }
        if(i == this.imgs.length) {
          i = 0;
        }

        observer.next(this.imgs[i++]);
        end++;
      }, this.timer);
    });

    observable.subscribe({
      next:(param) =>{
        this.imagePath = param+'';
      },
      complete: ()=>{
        this.toastr.success(`C'est fini !`);
      }
    });
  }

  ngOnInit(): void {
  }

}
