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
  private comments: any;
  private url: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private formatService: FormatService,
    private loading: LoadingService
  ) { }

  ngOnInit() {

    this.loading.show();

    let id = this.route.snapshot.paramMap.get('id');

    this.postService.getById(id).subscribe( data => {

      this.loading.hide();

      this.postDetail = data.data;
      this.comments = this.postDetail.comments;
      this.loadContent();
    }, error => {
      this.loading.hide();
    })
    this.url = window.location.href;
  }

  loadContent() {
    $("#display").html(this.postDetail.content);
    $("img").css("max-width","100%");
    $("img").css("height","auto");
    $("iframe").css("max-width","100%");
    $("iframe").css("height","auto");
  }

  share(baseUrl) {
    window.open(baseUrl + encodeURIComponent(this.url) + "&text="+ this.postDetail.title); 
    return false;
  }

}
