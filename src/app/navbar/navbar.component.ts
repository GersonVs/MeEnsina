import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { SignUpData } from '../types/SignUpData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private signUpData: SignUpData;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '250px',
      data: {...this.signUpData}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.signUpData = result;
    });
  }

}
