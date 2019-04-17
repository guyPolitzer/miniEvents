import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StartupService } from 'src/app/modules/core/services/startup.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() configData;
  @Output() onLoginOk = new EventEmitter<any>();
  public startSpinner: boolean = true;
  public loginForm = new FormGroup({
    email :   new FormControl('',[Validators.required,Validators.pattern(EMAIL_REGEX)]),
    password :  new FormControl('',Validators.required),
  });
  public loginResult : string = '';
  public loadingPercentage: number = 0;
  
  constructor(
    private startupService : StartupService
  ) { }

  ngOnInit() {
    this.startLoadigAnimation(0)
  }

  startLoadigAnimation(index) {
    if(index < 101) {
      this.loadingPercentage = index;
      setTimeout(() => {
          this.startLoadigAnimation(index+1);         
      },20);
    }
    else {
      this.startSpinner = false;;
    }
  }

  loginAction(action) {
    this.loginResult = '';
    switch(action) {
      case 'clear' :
        this.loginForm.patchValue({
          email : '',
          password : ''
        })
        break;
      case 'submit' :
        if(this.loginForm.valid) {
          this.startupService.logIn(this.loginForm.value,this.configData).subscribe((data: any)=>{
            this.loginResult = 'success';
            this.onLoginOk.emit(data.token);
          },
          error => {
            if(error.status==400) {
              this.loginResult = 'fail';
            }
            else {
              this.loginResult = 'error';
            }
          })
        }
        break;
    }
  }

}
