import { Component, OnInit } from '@angular/core';
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
  private searchContent: String = "";

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {

    this.router.events.subscribe(val => {

      $(window).scrollTop(0);
      this.isLog = this.storageService.get('token') ? true: false;
    })
  }

  ngOnInit() {
    
    $(window).click( () => {
      this.searchContent = "";
    })

    $('#search-button').click( (e) => {
      e.stopPropagation();
    })
  }
  
  search() {
    if(this.searchContent.length) {
      this.router.navigate(["/main/search"], {queryParams: {query: this.searchContent} });
      this.searchContent = "";
    }
    
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) { // press enter to submit
      this.search();
    }
    if(event.keyCode == 27) this.searchContent=""; // press esc to exit edit mode
  }
}
