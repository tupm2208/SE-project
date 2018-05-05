import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bref-post',
  templateUrl: './bref-post.component.html',
  styleUrls: ['./bref-post.component.css']
})
export class BrefPostComponent implements OnInit {
  @Input() post: any;
  constructor() { }

  ngOnInit() {
  }

}
