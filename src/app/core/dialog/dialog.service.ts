import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  showSuccess(data?): Observable<any> {

    if(!data) data = '';

    return this.dialog.open(SuccessComponent, {data: data }).afterClosed();
  }

  showError(data?): Observable<any> {

    if(!data) data = '';

    return this.dialog.open(ErrorComponent, { data: data}).afterClosed();
  }
}
