import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogService } from '../../../core/dialog/dialog.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  @Input() user: any;
  @Output() changeF: EventEmitter<any> = new EventEmitter();
  private pass: String;
  private oldPass: String;
  private confirmPass: String;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    
  }

  submit() {

  
    this.user.password = this.oldPass;
    this.user.newPassword = this.pass;

    this.changeF.emit();

  }

}
