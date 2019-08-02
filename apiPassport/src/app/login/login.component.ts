import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../models/user-interface';
//import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    //animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        private authService: AuthService, private router: Router, private location: Location
    ) {}

    ngOnInit() {}


    private user: UserInterface = {
        email: '',
        password: ''
      };
      public isError = false;
    
    
      onLogin(form: NgForm) {
        if (form.valid) {
          return this.authService
            .loginuser(this.user.email, this.user.password)
            .subscribe(
            data => {
              this.authService.setUser(data.user);
              const token = data.id;
              this.authService.setToken(token);
              this.router.navigate(['/user/profile']);
              location.reload();
              this.isError = false;
            },
            error => this.onIsError()
            );
        } else {
          this.onIsError();
        }
      }
    
      onIsError(): void {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 4000);
} }
