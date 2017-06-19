import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    private _token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string): void {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(console.error);
    }

    signinUser(email: string, password: string): void {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken()
                    .then((token: string) => this._token = token)
            })
            .catch(console.error);
    }

    logout(): void {
        firebase.auth().signOut();
        this._token = null;
    }

    isAuthenticated(): boolean {
        return this._token != null;
    }

    get token(): string {
        firebase.auth().currentUser.getToken()
            .then((token: string) => this._token = token)
        return this._token;
    }
}