import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './../auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {

    constructor(private authService: AuthService) {}
    
    onSignin(form: NgForm): void {
        const email: string = form.value.email;
        const password: string = form.value.password;

        this.authService.signinUser(email, password);
    }
}