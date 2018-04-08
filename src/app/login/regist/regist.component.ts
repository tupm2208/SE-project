import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['../login.component.css']
})
export class RegistComponent implements OnInit {
  
  private fullname: String;
  private email: String;
  private username: String;
  private password: String;
  private confirmPassword: String;

  constructor() { }

  ngOnInit() {
    
  }

  submit() {
    
  }

}
