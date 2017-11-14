import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage(): string {
    return this.email.hasError('required') ? 'Adres email jest wymagany' :
      this.email.hasError('email') ? 'Niepoprawny adres email' : '';
  }

}
