import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogService } from '../../../core/dialog/dialog.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() user: any;
  @Input() isUser:any;
  
  @Output() changeF = new EventEmitter();
  public name: String;
  public email: String;
  private isEdit: Boolean = false;
  private isChangePass: Boolean = false;
  private re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private dialog: DialogService
  ) { }

  ngOnInit() {

    this.name = this.user.name;
    this.email = this.user.email;
  }

  check() {

    if(!name) {

      this.dialog.showError('Invalid Name!');
      return false;
    }

    if(!this.re.test(String(this.email))) {

      this.dialog.showError('Invalid Email!');
      return false;
    }

    return true;
  }

  submit() {

    this.user.name = this.name;
    this.user.email = this.email;

    this.isEdit = false;
    this.changeF.emit();
  }
}
