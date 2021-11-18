import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API} from "../const/api.url";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {LoginResponseDto} from "../components/login/dto/login-response.dto";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private httpClient: HttpClient) {
  }

  callPostAuthent(user: User): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(API.login, user);
  }

  isConnected() :boolean {
    return !!this.getData('authToken');
  }

  setData(key: string, data: string) {
    //const jsonData = JSON.stringify(data)
    localStorage.setItem(key, data);
  }

  getData(key: string) {
    return localStorage.getItem(key);
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  logout() {
    this.removeData('authToken');
  }
}
