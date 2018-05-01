import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../../core/util/storage.service';
import { FormatService } from '../../../core/util/format.service';
declare var $: any;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  
  @Input() postDetail: any;
  @Input() comments: any ;

  private content: String;
  private isAuthor: Boolean;
  private user: any;
  
  constructor(
    private storageService: StorageService,
    private formatService: FormatService,
  ) { 
  }

  ngOnInit() {
        
  }

  submit() {
    var newComment = {
      commentator: this.getUserData(),
      content: this.content,
      createdAt: Date.now()
    }   
  
    this.comments.unshift(newComment);
  }

  getUserData() {
    return {
      ID: this.storageService.get('id'),
      name: this.storageService.get('username'),
      profilePicture: this.storageService.get('profilePicture'),
    }; 
     
  }

}
