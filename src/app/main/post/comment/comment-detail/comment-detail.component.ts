import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormatService } from '../../../../core/util/format.service';
import { StorageService } from '../../../../core/util/storage.service';
import { CommentService } from '../../../../core/api/comment.service';
import { CommentComponent } from '../comment.component'

declare var $:any;

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  @Input() comment: any;
  @Output() emitDelete: EventEmitter<any> = new EventEmitter();

  private isCommentator: Boolean = false; // if the current user is the commentator
  private isEdit = false; // open and close the comment edit input
  private editContent: String; // updated comment content

  constructor(
    private formatService: FormatService,
    private storageService: StorageService,
    private commmentComponent: CommentComponent,
    private commentService: CommentService,
  ) { 
    
  } 

  ngOnInit() {
    this.isCommentator = (this.comment.authorID == this.storageService.get("id")) ? true : false;
    this.editContent = this.comment.content;
    $(document).ready(() => {
      $(".dropdown-arrow").hide();
    })
  }

  // send comment to comment component
  delete() {
    // return this.commmentComponent.setSelectedComment(this.comment);
    this.emitDelete.emit(this.comment);
  }
  
  // edit comment
  edit() {
    if(this.editContent == "" || this.editContent == this.comment.content) this.cancelEdit();
    else {
      var params = {
        ID: this.comment.ID,
        content: this.editContent
      }
      this.commentService.put(params).subscribe(data => {
        if(data.status == true) {
          this.comment.content = this.editContent;
          this.isEdit = false;
        }
        else {
          alert("Failed to update your comment");
          this.isEdit = false;
        } 
      }, err => {
        alert("Failed to update your comment");
        this.isEdit = false;
      })
    }
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) { // press enter to submit
      this.edit()
    }
    if(event.keyCode == 27) this.cancelEdit(); // press esc to exit edit mode
  }

  showDropdownButton() {
    $("#comment-block" + this.comment.ID).show(); // show dropdown button when mouse over
  }

  hideDropdownButton() {
    $("#comment-block" + this.comment.ID).hide(); // hide dropdown button when mouse leave
  }

  // escape edit mode
  cancelEdit() {
    this.isEdit = false;
    this.editContent = this.comment.content;
    return false;
  }

}
