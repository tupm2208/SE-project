import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';

import { DialogService } from './dialog.service';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [
    ErrorComponent, 
    SuccessComponent
  ],
  providers: [
    DialogService
  ],
  entryComponents: [
    ErrorComponent, 
    SuccessComponent
  ]
})
export class DialogModule { }
