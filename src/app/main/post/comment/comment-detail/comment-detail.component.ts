import { Component, OnInit, Input } from '@angular/core';
import { FormatService } from '../../../../core/util/format.service';
@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  @Input() comment: any;
  
  constructor(
    private formatService: FormatService,
  ) { }

  ngOnInit() {
    console.log(this.comment);
  }

}
