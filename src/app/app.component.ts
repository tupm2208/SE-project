import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private toggleMenu: Boolean
  
  constructor(
    private router: Router
  ) {

    this.router.events.subscribe(val => {

      $(window).scrollTop(0);
    })
  }
}
