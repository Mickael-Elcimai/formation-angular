import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';
import {Ex1Component} from './components/ex1/ex1.component';
import {TwoComponent} from './components/two/two.component';
import {FormsModule} from "@angular/forms";
import {Ex2Component} from './components/ex2/ex2.component';
import {FilsComponent} from './components/fils/fils.component';
import {PereComponent} from './components/pere/pere.component';
import {CvComponent} from './cv/components/cv/cv.component';
import {ElemComponent} from './cv/components/elem/elem.component';
import {ListComponent} from './cv/components/list/list.component';
import {DetailComponent} from './cv/components/detail/detail.component';
import {NgStyleComponent} from './directives/ng-style/ng-style.component';
import {NgClassComponent} from './directives/ng-class/ng-class.component';
import {RainbowDirective} from './directives/rainbow.directive';
import {UsdBtcPipe} from './pipes/usd-btc.pipe';
import {DefaultImagePipe} from './pipes/default-image.pipe';
import {TodoComponent} from './todo/components/todo/todo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {EmbaucheComponent} from './cv/components/embauche/embauche.component';
import {EmployeeComponent} from './cv/components/employee/employee.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterSimulatorComponent} from './components/router-simulator/router-simulator.component';
import {AdminComponent} from './components/admin/admin.component';
import {PortailComponent} from './components/portail/portail.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DetailCvComponent} from './cv/components/detail-cv/detail-cv.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './components/login/login.component';
import { AddCvComponent } from './cv/components/add-cv/add-cv.component';
import { TestObservablesComponent } from './components/test-observables/test-observables.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { LogoutComponent } from './components/logout/logout.component';
import {AuthGuard} from "./guards/guard";
import {AuthInterceptorProvider} from "./interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    Ex1Component,
    TwoComponent,
    Ex2Component,
    FilsComponent,
    PereComponent,
    CvComponent,
    ElemComponent,
    ListComponent,
    DetailComponent,
    NgStyleComponent,
    NgClassComponent,
    RainbowDirective,
    UsdBtcPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    EmployeeComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    AdminComponent,
    PortailComponent,
    NotFoundComponent,
    DetailCvComponent,
    TestFormComponent,
    LoginComponent,
    AddCvComponent,
    TestObservablesComponent,
    TestHttpComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [AuthGuard, AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
