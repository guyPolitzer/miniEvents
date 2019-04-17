import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkdeskComponent } from './components/workdesk/workdesk.component';
import { MatDialogConfig, MatAutocompleteModule, MatPaginatorIntl, MatButtonModule, MatStepperModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
}                                             from '@angular/material';
import { FlexLayoutModule }                   from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AddDialogComponent } from 'src/app/modules/main/components/add-dialog/add-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule, MatButtonModule, MatStepperModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [WorkdeskComponent,AddDialogComponent],
  exports : [
    WorkdeskComponent
  ],
  entryComponents : [AddDialogComponent]
  
})
export class MainModule { }
