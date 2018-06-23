import {Component, OnInit, Renderer} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public genericErrorMessage = 'Campos Invalidos';
  public errorMessage = this.genericErrorMessage;
  public email: string;
  public password: string;
  public showValidFormMessage = false;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private renderer: Renderer) {
    this.renderer.setElementClass(document.body, '2-columns', false);
    this.renderer.setElementClass(document.body, 'fixed-navbar', false);

    this.renderer.setElementClass(document.body, '1-column', true);
    this.renderer.setElementClass(document.body, 'bg-full-screen-image', true);
    this.renderer.setElementClass(document.body, 'blank-page', true);
  }

  ngOnInit(): void {
    localStorage.removeItem('username');
    localStorage.clear();
  }

  login() {
    if (!this.validateForm()) {
      this.showValidFormMessage = true;
      this.errorMessage = this.genericErrorMessage;
    } else {
      console.log('this.username: ' + this.email);
      localStorage.setItem('email', this.email);
      console.log(localStorage.getItem('username'));
      this._router.navigate(['/main']);
    }
  }

  validateForm() {
    if (this.email === undefined) {
      return false;
    }

    if (this.email.length === 0) {
      return false;
    }

    if (this.password === undefined) {
      return false;
    }

    if (this.password.length === 0) {
      return false;
    }

    return this.isValidEmail(this.email);
  }

  isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
