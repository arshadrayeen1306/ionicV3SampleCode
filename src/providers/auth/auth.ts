import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
let apiUrl = 'http://opentable.herokuapp.com/api';


@Injectable()
export class AuthProvider {
  credentials_two: any;
  constructor(public http: HttpClient) {
    console.log('Hello ServicProvider Provider');
  }

  servicePost(action,credentials) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl+action, (credentials), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
          console.log(err)
        });
    });
  }
  serviceGet(action) {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl+action).subscribe((response) => {
        // console.log(response);
        resolve(response);
    });
    });
  }
}