import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {
  MatProgressBarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule
}                                             from '@angular/material';
import { FlexLayoutModule }                   from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  exports : [
    LoginComponent
  ]
})
export class CoreModule { }
