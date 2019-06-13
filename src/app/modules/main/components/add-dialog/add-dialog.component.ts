import { Component, OnInit, Inject, Output, EventEmitter ,Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { WorkdeskService } from 'src/app/modules/main/services/workdesk.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^[0-9]{10,14}$/;
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  public configData;
  public newForm = new FormGroup({
    name :          new FormControl('',Validators.required),
    phone :         new FormControl('',[Validators.pattern(PHONE_REGEX),Validators.required]),
    email :         new FormControl('',Validators.pattern(EMAIL_REGEX)),
    products :      new FormControl('',Validators.required),
    services :      new FormControl(''),
    website :       new FormControl(''),
    facebook :      new FormControl(''),
    address :       new FormControl(''),
    delivery :      new FormControl(false),
    subRegionId :   new FormControl('',Validators.required),
    categoryIds :   new FormControl('',Validators.required),
  })
  public productsForm = new FormGroup({
    name :      new FormControl('',Validators.required),
    category :  new FormControl('',Validators.required)
  })
  public categoryForm = new FormGroup({
    name :      new FormControl('',Validators.required),
  })
  public categories = [];
  public regions  = [];
  public error: boolean = false;
  public type: string;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private workdeskService: WorkdeskService 
  ) { 
    console.log('dialog data => ',data);
    this.configData = data.configData;
    this.type = data.type;
    this.getData(this.type);
  }

  ngOnInit() {
   
  }

  getData(type) {
    switch (type) {
      case 'suppliers' :
        let sub = this.workdeskService.getData('suppliers','categories',this.configData).subscribe((data: any) => {
          this.categories = data;
          console.log('categories list => ',this.categories);
          setTimeout(()=>{
            sub.unsubscribe();
          },50)
        })
        let sub2 = this.workdeskService.getData('suppliers','regions',this.configData).subscribe((data: any) => {
          this.regions = data;
          console.log('regions list => ',this.regions);
          setTimeout(()=>{
            sub2.unsubscribe();
          },50)
        })
        break;
      case 'products' :
        let sub3 = this.workdeskService.getData('products','categories',this.configData).subscribe((data: any) => {
          this.categories = data;
          console.log('categories list => ',this.categories);
          setTimeout(()=>{
            sub3.unsubscribe();
          },50)
        })
        break;
    }
  }

  dialogAction(action){
    this.error = false;
    switch (action) {
      case 'clear' :
        switch (this.type) {
          case 'suppliers' :
            this.newForm.patchValue({
              name :          '',
              phone :         '',
              email :         '',
              products :      '',
              services :      '',
              website :       '',
              facebook :      '',
              address :       '',
              delivery :      false,
              subRegionId :   null,
              categoryIds :   null
            })
            break;
          case 'products' :
            this.productsForm.patchValue({
              name :      '',
              category :  '',
            })
            break;
          case 'categories' :
            this.categoryForm.patchValue({
              name :      '',
            })
            break
        }
        break;
      case 'submit' :
        switch (this.type) {
          case 'suppliers' :
            console.log(this.newForm.value);
            if(this.newForm.valid) {
              this.workdeskService.setData(this.type,this.newForm.value,this.configData).subscribe((data: any) => {
                this.dialogRef.close(true);
              },
              error => {
                this.error = true;
              })
            }
            break;
          case 'products' :
            console.log(this.productsForm.value);
            if(this.productsForm.valid) {
              this.workdeskService.setData(this.type,this.productsForm.value,this.configData).subscribe((data: any) => {
                this.dialogRef.close(true);
              },
              error => {
                this.error = true;
              })
            }
            break;
          case 'categories' :
            console.log(this.categoryForm.value);
            if(this.categoryForm.valid) {
              this.workdeskService.setData(this.type,this.categoryForm.value,this.configData).subscribe((data: any) => {
                this.dialogRef.close(true);
              },
              error => {
                this.error = true;
              })
            }
            break
        }
        
        break;
      case 'close' :
        this.dialogRef.close(false);
        break;
    }
  }

}


// name:String,
// 		phone:String,
// 		email:String,
// 		products:String,
// 		services:String,
// 		website:String,
// 		facebook:String,
// 		subRegionId:int, (from regions list)
// 		address:String,
// 		delivery:boolean (checkbox)
// 		categoryIds:int[] (from categories list) -> one or more (example: 1,2,3)
