import { Injectable, OnDestroy } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from '../model/user';
import 'rxjs/add/operator/map';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class AuthenticateService implements OnDestroy {

  authenticateUrl = '/api/authenticate';

  loggedUser: User;
  isLogged = false;

  constructor(private http: Http) {
    if ( localStorage.getItem('loggedUser') !== null) {
      this.loggedUser = new User(JSON.parse(localStorage.getItem('loggedUser')).username);
      this.isLogged = true;
    }
  }

  login(username: string, password: string) {

    const securedPassword = Md5.hashStr(password);
    console.log(securedPassword);
    const header = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.authenticateUrl, JSON.stringify({username: username, password: securedPassword}),
      {headers: header});
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
