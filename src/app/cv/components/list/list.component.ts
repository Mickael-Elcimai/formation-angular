import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cv} from "../../model/cv";
import {CvService} from "../../services/cv.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private cvService: CvService, private httpClient: HttpClient, private toastr: ToastrService) {
  }

  //Output() sendDataToFather = new EventEmitter;
  dataFromSon: Cv | null = null;
  allCvs: Cv[] = [];
  waitingMessage = "informations incoming...";

  ngOnInit(): void {
    //this.allCvs = this.cvService.getAll();
    let obsv = this.cvService.callGetCv();

    let transformedData = obsv.pipe(
      map(data => this.transformPersonneInCv(data))
    );

    transformedData.subscribe({
      next: (incomingCvs: any) => {
        this.allCvs = incomingCvs;
      }, error: () => {
        this.allCvs = this.cvService.getAll();
        this.toastr.warning(`Erreur sur l'API, on utilise des fake.`);
      }
    });
  }

  transformPersonneInCv = (personne: any) => personne;

  //processDataFromSon(data : any) {
  //console.log("test", data);
  //  this.dataFromSon = data;
  //  this.sendDataToFather.emit(this.dataFromSon);
  //}
}
