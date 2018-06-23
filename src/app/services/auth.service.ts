import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor( public _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = this._firebaseAuth.authState;
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithEmail(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  registerWithEmail(email, password) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.deleteDataLogin();
    return this._firebaseAuth.auth.signOut();
  }

  validateSesion() {
    return this._firebaseAuth.auth.currentUser != null;
  }

  storeDataLogin() {
    sessionStorage.setItem('login', JSON.stringify(this._firebaseAuth.auth.currentUser));
  }

  deleteDataLogin() {
    sessionStorage.removeItem('login');
  }
}
