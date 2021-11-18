import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  processForm(myForm: NgForm) {
    if (myForm.valid) {
      console.log(myForm.value);

      this.loginService.callPostAuthent(myForm.value).subscribe({
        next: (loginResponse) => {
          console.log(loginResponse);

          this.loginService.setData('authToken', loginResponse.id);

          this.toastr.success(`Votre connexion a fonctionnée.`);

          this.router.navigate(['cv']);
        }, error: (err) => {
          console.log(err);
          this.toastr.error(`Une erreur est survenue ${err.message}`);
        }
      });


    } else {
      this.toastr.error(`Votre forumaire n'est pas valide.`);
    }
  }
}
