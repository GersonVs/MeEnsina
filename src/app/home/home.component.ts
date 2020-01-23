import { Component, OnInit } from '@angular/core';
import Cookies from "js-cookie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private isLoged = (Cookies.get('isLoged') === "true")

  constructor() { }

  ngOnInit() {
  }

}
