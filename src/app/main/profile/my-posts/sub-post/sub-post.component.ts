import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormatService } from '../../../../core/util/format.service';

@Component({
  selector: 'app-sub-post',
  templateUrl: './sub-post.component.html',
  styleUrls: ['./sub-post.component.css']
})
export class SubPostComponent implements OnInit {

  @Input() post: any;
  @Output() delete: any = new EventEmitter();
  @Input() isUser: any;
  
  constructor(
    private formatService: FormatService
  ) { }

  ngOnInit() {
  }

  deletePost() {

    this.delete.emit(this.post);
  }

}
