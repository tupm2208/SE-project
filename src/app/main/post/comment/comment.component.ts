import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../../core/util/storage.service';
import { FormatService } from '../../../core/util/format.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  
  @Input() comments: any;

  private content: String;
  private isAuthor: Boolean;
  
  
  constructor(
    private storageService: StorageService,
    private formatService: FormatService,
  ) { 
  }

  ngOnInit() {
    
  }

  submit() {
    
    console.log(this.formatService.formatDateTime(this.comments[0].createdAt) );    
  }

}
