import {Component, OnInit, Renderer} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styles: []
})
export class ForgotpasswordComponent implements OnInit {

  public username: string;
  public password: string;

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
    console.log('this.username: ' + this.username);
    localStorage.setItem('username', this.username);
    console.log(localStorage.getItem('username'));
    this._router.navigate(['/']);
  }
}
