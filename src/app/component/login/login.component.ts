import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg = "";

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    if(this.username.trim().length === 0)
    {
      this.errorMsg = "UserName is Required";
    }
    else if(this.password.trim().length === 0){
      this.errorMsg = "Password is Required";
    }
    else
    {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);

      if(res === 200)
      {
        this.router.navigate(['carak']);
      }

      if(res === 403)
      {
        this.errorMsg = "Invalid Credentials";
      }
    }

  }

  goToHome() {
    this.router.navigate(['carak']);
 }

}
