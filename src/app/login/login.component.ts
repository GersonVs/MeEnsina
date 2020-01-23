import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Cookies from "js-cookie";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: String;
  private password: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    let loginStatus = this.userService.loginUser(this.email, this.password)
    if(loginStatus) {
      alert("Login realizado com sucesso")
      Cookies.set('isLoged', true)
    }else{
      alert("Email ou senha incorretos")
      Cookies.set('isLoged', false)
    }
  }

}
