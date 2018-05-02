import { Component, OnInit, Input } from '@angular/core';
import { FormatService } from '../../../../core/util/format.service';
import { StorageService } from '../../../../core/util/storage.service';
declare var $:any;
@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  @Input() comment: any;
  
  private isCommentator: Boolean = false;

  constructor(
    private formatService: FormatService,
    private storageService: StorageService,
  ) { 
    
  } 

  ngOnInit() {
    this.isCommentator = (this.comment.authorID == this.storageService.get("id")) ? true : false;
  }

}
