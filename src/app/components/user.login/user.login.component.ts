import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../../services/authenticate.service';
import { error } from 'util';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserLoginComponent implements OnInit {

  private returnUrl: string;
  private isError = false;
  private isLoading = false;
  private errMessage: string;

  constructor(private route: ActivatedRoute, private authenticateService: AuthenticateService, private router: Router) {
    console.log('UserLogin constructor');
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(username: string, password: string) {

    this.isLoading = true;
    this.authenticateService.login(username, password).subscribe(
      data => {
        if (!data.json().error) {
          console.log(JSON.stringify(data.json().user));
          localStorage.setItem('loggedUser', JSON.stringify(data.json().user));
          this.authenticateService.loggedUser = new User(data.json().user.username);
          this.authenticateService.isLogged = true;
          this.router.navigate([this.returnUrl]);
        } else {
          this.errMessage = data.json().message;
          this.isError = true;
        }
        this.isLoading = false;
      },
      err => {
        this.errMessage = 'Brak połączenia z serwerem';
        this.isError = true;
        this.isLoading = false;
      });
  }

}
