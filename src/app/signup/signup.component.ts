import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignUpData } from '../types/SignUpData';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SignUpData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
