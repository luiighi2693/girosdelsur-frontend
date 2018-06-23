import {Component, OnInit, Renderer} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restorepassword',
  templateUrl: './restorepassword.component.html',
  styles: []
})
export class RestorepasswordComponent implements OnInit {

  public genericErrorMessage = 'Campos invalidos';
  public errorMessage = this.genericErrorMessage;
  public password: string;
  public repeatPassword: string;
  public showValidFormMessage = false;
  public validatePassword = false;

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

      if (this.password !== this.repeatPassword) {
        this.errorMessage = 'Claves no coinciden';
      }
    } else {
      this.showValidFormMessage = false;
      this.validatePassword = true;
    }
  }

  validateForm() {
    if (this.password === undefined) {
      this.errorMessage = this.genericErrorMessage;
      return false;
    }

    if (this.password.length === 0) {
      this.errorMessage = this.genericErrorMessage;
      return false;
    }

    if (this.repeatPassword === undefined) {
      this.errorMessage = this.genericErrorMessage;
      return false;
    }

    if (this.repeatPassword.length === 0) {
      this.errorMessage = this.genericErrorMessage;
      return false;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'La clave debe poseer como minimo 8 caracteres';
      return false;
    }

    return true;
  }
}
