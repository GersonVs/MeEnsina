import { Injectable } from '@angular/core';
import Cookies from "js-cookie";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  registerUser(email: String, password: String) {
    Cookies.set('email', email)
    Cookies.set('password', password)
  }

  loginUser(email: String, password: String) {
    return (Cookies.get('email') === email && Cookies.get('password') === password)
  }
}
