// angular staff
import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import {
  MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatCardModule    
}                                             from '@angular/material';
import { FlexLayoutModule }                   from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }                   from '@angular/common/http';
import { mainRoutingModule }                  from './main.route';

// components
import { AppComponent }                       from './app.component';

//modules 
import { MainModule }                         from 'src/app/modules/main/main.module';
import { CoreModule }                         from 'src/app/modules/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    mainRoutingModule,
    MainModule,
    CoreModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
