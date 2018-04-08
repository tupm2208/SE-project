import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogService } from '../../../core/dialog/dialog.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  @Input() user: any;
  @Output() change = new EventEmitter();
  private pass: String;
  private oldPass: String;
  private cfPass: String;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {

  }

  submit() {

    if(!this.check()) return;

    this.user.password = this.pass;

    this.change.emit();
  }

  check() {

    if(this.user.password != this.oldPass) {

      this.dialogService.showError("Wrong password!");
      return false;
    }

    if(this.pass != this.cfPass) {

      this.dialogService.showError("New Pass doens't match the cf one!");

      return false;
    }

    return true;
  }

}
