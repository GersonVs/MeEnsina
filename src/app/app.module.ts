import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SignupComponent
  ]
})
export class AppModule { }
