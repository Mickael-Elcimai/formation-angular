import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../../services/cv.service";
import {Cv} from "../../model/cv";
import {ToastrService} from "ngx-toastr";
import {EmbaucheService} from "../../services/embauche.service";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  cv: Cv | null = null;
  isConnected : boolean = false;

  constructor(private loginService: LoginService, private router: Router, private cvService: CvService, private embaucheService: EmbaucheService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.callGetCvById(params['id']).subscribe({
        next: (incomingCv: any) => {
          this.cv = incomingCv;

          if (!this.cv) {
            this.router.navigate(['cv']);
          } else {
            this.toastr.info(`Vous consultez actuellement le CV de ${this.cv?.firstname} ${this.cv?.name}.`);
          }

          this.isConnected = this.loginService.isConnected();

          //console.log(incomingCv);
        }, error: () => {
          this.cv = this.cvService.get(0) || null;
          this.toastr.warning(`Erreur sur l'API, on utilise des fake.`);
        }
      });
    });
  }

  ngDeleteCv(cv: Cv | null) {
    if (cv) {
      this.cvService.callDelCv(cv);
      //this.cvService.remove(cv);
      if (this.embaucheService.getRang(cv) > 0) {
        this.embaucheService.fire(cv);
      }
      this.cvService.remove(cv);
      this.router.navigate(['cv']);
    }
  }
}
