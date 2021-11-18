import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from "./todo/components/todo/todo.component";
import {CvComponent} from "./cv/components/cv/cv.component";
import {FirstComponent} from "./components/first/first.component";
import {Ex1Component} from "./components/ex1/ex1.component";
import {Ex2Component} from "./components/ex2/ex2.component";
import {PereComponent} from "./components/pere/pere.component";
import {NgStyleComponent} from "./directives/ng-style/ng-style.component";
import {NgClassComponent} from "./directives/ng-class/ng-class.component";
import {PortailComponent} from "./components/portail/portail.component";
import {AdminComponent} from "./components/admin/admin.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {DetailCvComponent} from "./cv/components/detail-cv/detail-cv.component";
import {TestFormComponent} from "./components/test-form/test-form.component";
import {LoginComponent} from "./components/login/login.component";
import {AddCvComponent} from "./cv/components/add-cv/add-cv.component";
import {TestObservablesComponent} from "./components/test-observables/test-observables.component";
import {TestHttpComponent} from "./components/test-http/test-http.component";
import {AuthGuard} from "./guards/guard";
import {LogoutComponent} from "./components/logout/logout.component";

const routes: Routes = [
  {
    path: '', component: PortailComponent, children: [
      {path: 'todo', component: TodoComponent},
      {path: 'cv', children: [
          {path: '', component: CvComponent},
          {path: 'detail/:id', component: DetailCvComponent},
          {path: 'addPersonne', component: AddCvComponent, canActivate: [AuthGuard]}
        ]},
      {path: 'testForm', component: TestFormComponent},
      {path: 'login', component: LoginComponent},
      {path: 'testObs', component: TestObservablesComponent},
      {path: 'testHttpClient', component: TestHttpComponent}
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'first', component: FirstComponent},
      {path: 'ex1', component: Ex1Component},
      {path: 'ex2', component: Ex2Component},
      {path: 'pere', component: PereComponent},
      {path: 'exStyle/:couleur/:font/:size', component: NgStyleComponent},
      {path: 'exClass', component: NgClassComponent}
    ]
  },
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
