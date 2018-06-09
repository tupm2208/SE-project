import { Component, OnInit, Input } from '@angular/core';

import { FormatService } from '../../../core/util/format.service';
declare var $: any;
@Component({
  selector: 'app-bref-post',
  templateUrl: './bref-post.component.html',
  styleUrls: ['./bref-post.component.css']
})
export class BrefPostComponent implements OnInit {

  @Input() post: any;
  
  constructor(
    private formatService: FormatService
  ) { }

  ngOnInit() {
    $(".category-tag").click((e)=>{
      e.stopPropagation();
    })
    $(".authorname-tag").click( e => {
      e.stopPropagation();
    })
    this.post.subtitle = this.post.subtitle? this.post.subtitle.split(' ').slice(0,40).join(' '): "";
  }

}
