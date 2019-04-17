import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { WorkdeskService } from 'src/app/modules/main/services/workdesk.service';
import { AddDialogComponent } from 'src/app/modules/main/components/add-dialog/add-dialog.component';

@Component({
  selector: 'workdesk',
  templateUrl: './workdesk.component.html',
  styleUrls: ['./workdesk.component.css']
})
export class WorkdeskComponent implements OnInit {
  @Input() configData;
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['name','phone','email','address','facebook','website','products','services','categories','subRegion','deliveries']; 
  public process: boolean = true;;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private workdeskService: WorkdeskService
  ) { }

  ngOnInit() {
    this.workdeskService.getData('suppliers',this.configData).subscribe((data: any) => {
      this.dataSource.data = data.concat(data);
      this.process = false;
     });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '45vw',
      data: {
        configData : this.configData,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed, result => ',result);
      if(result) {
        this.process = true;
        setTimeout(()=> {
           this.workdeskService.getData('suppliers',this.configData).subscribe((data: any) => {
             this.dataSource.data = data
             this.process = false;
            });
        },2000)
       
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

// ['name','phone','email','address','facebook','website','products','services','categories','subRegion','deliveries']
// address: ""
// categories: [{id: 1, name: "אירועים"}, {id: 3, name: "מתנפחים ומפוחים"}]
// 0: {id: 1, name: "אירועים"}
// 1: {id: 3, name: "מתנפחים ומפוחים"}
// deliveries: false
// email: ""
// facebook: ""
// id: 5
// name: "לירון"
// phone: "0523750097"
// products: ""
// services: null
// shared: true
// subRegion: {id: 33, name: "אשדוד-אשקלון"}
// id: 33
// name: "אשדוד-אשקלון"
// userId: 0
// website: ""
