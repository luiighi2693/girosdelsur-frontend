import {Component, OnInit, Renderer} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styles: []
})
export class ForgotpasswordComponent implements OnInit {

  public genericErrorMessage = 'Correo Invalido';
  public errorMessage = this.genericErrorMessage;
  public email: string;
  public showValidFormMessage = false;
  public validateEmail = false;

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
      this.showValidFormMessage = false;
      this.validateEmail = true;
    }
  }

  validateForm() {
    if (this.email === undefined) {
      return false;
    }

    if (this.email.length === 0) {
      return false;
    }

    return this.isValidEmail(this.email);
  }

  isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
