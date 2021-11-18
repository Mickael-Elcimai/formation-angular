import {Injectable} from "@angular/core";
import {LoggerService} from "../../services/logger.service";
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})

export class EmbaucheService {
  constructor(private loggerService: LoggerService) {
  }

  private allEmployees: Cv[] = [];

  log(): void {
    this.allEmployees.forEach((cv) => {
      this.loggerService.logger("cv :: " + cv.firstname + " -- " + cv.name);
    });
  }

  hire(cv: Cv): boolean {
    this.loggerService.logger('on embauche un CV : ' + cv.firstname);
    const index = this.allEmployees.indexOf(cv);
    if (index === -1) {
      this.allEmployees.push(cv);
      return true;

    } else {
      return false;
    }
  }

  fire(cv: Cv): void {
    this.loggerService.logger('on supprime un CV : ' + cv.firstname);
    const index = this.allEmployees.indexOf(cv);
    if (index !== -1) {
      this.allEmployees.splice(index, 1);
    }
  }

  getAll(): Cv[] {
    this.loggerService.logger('on recupere tous les CV embauches');
    return this.allEmployees;
  }

  getRang(cv : Cv | null) : number {
    if(cv) {
      const index = this.allEmployees.indexOf(cv)+1;
      return index;
    }
    return 0;
  }
}
