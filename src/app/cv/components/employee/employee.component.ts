import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../../model/cv";
import {EmbaucheService} from "../../services/embauche.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public embaucheService: EmbaucheService, private toastr: ToastrService) {
  }

  @Input() cv: Cv | null = null;
  @Input() isLast : boolean | null = false;

  ngOnInit(): void {
  }

  ngRenvoi(cv: Cv | null) {
    if (cv) {
        this.embaucheService.fire(cv);
        this.toastr.info(`Vous venez de renvoyer ${this.cv?.firstname} ${this.cv?.name}.`);
    }
  }
}
