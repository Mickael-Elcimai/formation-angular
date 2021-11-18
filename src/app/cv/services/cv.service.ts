import {Injectable} from "@angular/core";
import {LoggerService} from "../../services/logger.service";
import {Cv} from "../model/cv";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {API} from "../../const/api.url";
import {LoginService} from "../../services/login.service";

@Injectable({
  providedIn: 'root'
})

export class CvService {
  constructor(private loggerService: LoggerService, private httpClient: HttpClient, private loginService: LoginService) {
  }

  cvSelectedSubject = new Subject<Cv>();

  private allCv: Cv[] = [new Cv(0, "Golden", "Mabel", 25, 123, "Writer", "rotating_card_profile.png"),
    new Cv(1, "Wolf", "David", 30, 123, "Dev", "rotating_card_profile2.png"),
    new Cv(2, "Meyer", "Daniel", 20, 123, "Trainer", "rotating_card_profile3.png"),
    new Cv(3, "Hunt", "Lynda", 56, 123, "Medical records and health information technician", ""),
    new Cv(4, "Brown", "Adam", 43, 123, "Service Merchandise", ""),
    new Cv(5, "Brown", "Eve", 45, 123, "Service Merchandise", "")];

  log(): void {
    this.allCv.forEach((cv) => {
      this.loggerService.logger("cv :: " + cv.firstname + " -- " + cv.name);
    });
  }

  add(cv: Cv): void {
    this.loggerService.logger('on ajoute un CV : ' + cv.firstname);
    let id = this.getAll().length + 1;
    cv.id = id;
    this.allCv.push(cv);
  }

  remove(cv: Cv): void {
    this.loggerService.logger('on supprime un CV : ' + cv.firstname);
    const index = this.allCv.indexOf(cv);
    if (index !== -1) {
      this.allCv.splice(index, 1);
    }
  }

  getAll(): Cv[] {
    this.loggerService.logger('on recupere tous les CV');
    return this.allCv;
  }

  get(id: number): Cv | undefined {
    this.loggerService.logger('on recupere le CV ' + id);
    return this.allCv.find(v => v['id'] == id);
  }

  selectCv(cv: Cv) {
    this.cvSelectedSubject.next(cv);
  }

  callGetCv() {
    return this.httpClient.get<Cv[]>(API.cvs);
  }

  callGetCvById(id: number) {
    return this.httpClient.get<Cv>(`${API.cvs}/${id}`);
  }

  callPostCv(cv: Cv) :Observable<Cv>{
    return this.httpClient.post<Cv>(`${API.cvs}`, cv);
  }

  callDelCv(cv: Cv) {
    return this.httpClient.delete(`${API.cvs}/${cv.id}`);
  }
}
