import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './core/util/storage.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private toggleMenu: Boolean;
  private isLog: Boolean = false;
  
  constructor(
    private router: Router,
    private storageService: StorageService
  ) {

    this.router.events.subscribe(val => {

      $(window).scrollTop(0);

      this.isLog = this.storageService.get('token')? true: false;
    })
  }
}
