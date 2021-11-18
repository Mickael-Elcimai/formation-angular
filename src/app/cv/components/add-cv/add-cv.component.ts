import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Cv} from "../../model/cv";
import {CvService} from "../../services/cv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor(private router: Router, private cvService: CvService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  addCv(formulaire: NgForm) {
    if (formulaire && formulaire.valid) {
      let form = formulaire.value;

      this.cvService.callPostCv(form).subscribe({next: ()=>{
        this.router.navigate(['cv']);
        }, error:(err)=>{
          this.toastr.error(`Une erreur est survenue ${err.message}`);
        }});

      this.toastr.success(`Le cv de ${formulaire.value.firstname} ${formulaire.value.name} a bien été traité.`);
      this.router.navigate(['cv']);
    } else {
      this.toastr.error(`Votre forumaire n'est pas valide.`);
    }
  }
}
