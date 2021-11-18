import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((users)=>{
      console.log(users);
    });
  }

}
