import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../../model/cv";
import {EmbaucheService} from "../../services/embauche.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../../services/cv.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private cvService: CvService, private embaucheService: EmbaucheService, private toastr: ToastrService) {
  }

  @Input() cv: Cv | null = null;

  ngOnInit(): void {
    this.cvService.cvSelectedSubject.subscribe((cv)=>{
      this.cv = cv;
    });
  }

  ngEmbauche(cv: Cv) {
    if (this.embaucheService.hire(cv)) {
      this.showSuccess();
    } else {
      this.showAlert();
    }
  }

  showSuccess() {
    this.toastr.success(`Vous venez d'embaucher ${this.cv?.firstname} ${this.cv?.name}.`, 'Embauche.');
  }

  showAlert() {
    this.toastr.warning(`${this.cv?.firstname} ${this.cv?.name} fait déjà parti de vos effectifs.`);
  }

  goToDetails(cv: Cv) {

  }
}
