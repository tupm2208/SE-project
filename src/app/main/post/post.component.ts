import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormatService } from '../../core/util/format.service';
import { PostService } from '../../core/api/post.service'
import { LoadingService } from '../../core/util/loading.service';

declare let $: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private postDetail: any = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private formatService: FormatService,
    private loading: LoadingService
  ) { }

  ngOnInit() {

    this.loading.show();

    let id = this.route.snapshot.paramMap.get('id');

    console.log("id: ", id);

    this.postService.getById(id).subscribe( data => {

      console.log("post: ",id, data);
      this.loading.hide();

      this.postDetail = data.data;
      $("#display").html(this.postDetail.content);
    }, error => {

      this.loading.hide();
    })
  }

}
