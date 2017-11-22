import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticateService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    const header = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/api/authenticate', JSON.stringify({username: username, password: password}),
      {headers: header});
      /*.map((response: Response) => {
        console.log(response);
        if (response.json().error) {
          localStorage.setItem('loggedUser', JSON.stringify(response.json().user));
        }
      });
      */
  }

  logout(username) {
    localStorage.removeItem('loggedUser');
  }

}
