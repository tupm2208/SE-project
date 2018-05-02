import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../../core/util/storage.service';
import { FormatService } from '../../../core/util/format.service';
import { CommentService } from '../../../core/api/comment.service';
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
  private isLogin: Boolean = false;
  
  constructor(
    private storageService: StorageService,
    private formatService: FormatService,
    private commentService: CommentService,
  ) { 
    this.isLogin = this.storageService.get("token") ? true : false;
  }

  ngOnInit() {
        
  }

  submit() {

    if (!this.content) return;

    var newComment = {
      content: this.content,
      postID: this.postDetail.ID,
    }
    // get User information as commentator
    var commentator = this.getUserData();
    
    this.commentService.post(newComment).subscribe(dataReturn => {
      // add commentator attribute and bind information to comments array
      dataReturn.data.commentator = commentator;
      this.comments.unshift(dataReturn.data);
     
    }, err => {
      alert("Something wrong happen!!!");
    })
    
    
  }

  getUserData() {
    return {
      ID: this.storageService.get('id'),
      name: this.storageService.get('username'),
      profilePicture: this.storageService.get('profilePicture'),
    }; 
     
  }

}
