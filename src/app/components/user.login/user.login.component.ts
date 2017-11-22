import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../../services/authenticate.service';
import { error } from 'util';

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
    console.log(this.route.snapshot.paramMap);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(username: string, password: string) {
    this.isLoading = true;
    this.authenticateService.login(username, password).subscribe(
      data => {
        if (!data.json().error) {
          localStorage.setItem('loggedUser', JSON.stringify(data.json().user));
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
