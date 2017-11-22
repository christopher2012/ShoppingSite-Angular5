import { Injectable, OnDestroy } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from '../model/user';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticateService implements OnDestroy {

  loggedUser: User;
  isLogged = false;

  constructor(private http: Http) {
    if ( localStorage.getItem('loggedUser') !== null) {
      this.loggedUser = new User(JSON.parse(localStorage.getItem('loggedUser')).username);
      this.isLogged = true;
    }
  }

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
    this.isLogged = false;
    this.loggedUser = null;
  }

  ngOnDestroy() {
    if (this.isLogged) {
      localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser.username));
    }
  }

}
