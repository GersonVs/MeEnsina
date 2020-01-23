import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: User = {firstName: "", lastName: "", password: "", email: ""};
  private passwordConfirmation: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.userService.registerUser(this.user.email, this.user.password)
  }

}
