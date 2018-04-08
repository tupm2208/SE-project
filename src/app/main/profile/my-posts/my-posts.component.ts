import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import 'rxjs/add/operator/filter';

import { LoadingService } from '../../../core/util/loading.service';
import { PostService } from '../../../core/api/post.service';
import { StorageService } from '../../../core/util/storage.service';


@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  private postList: Array<any> = [];
  private page: number = 1;

  private params: any = {};

  constructor(
    private loadingService: LoadingService,
    private postService: PostService,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) { }

  ngOnInit() {

    this.params.authorID = this.storageService.get('id');

    this.loadingService.show();

    this.route.queryParams
      .subscribe(params => {

        this.getPostList();
      });
  }

  getPostList() {

    this.params.page = this.page;

    this.postService.list(this.params.page).subscribe( data => {

      this.postList = data;

      console.log(" data: ", data);
      this.loadingService.hide();
    }, error => {

      this.loadingService.hide();
    })
  }

  olderPost() {

    this.page++;

    this.loadingService.show();

    this.getPostList();
  }

  newerPost() {

    this.page--;

    this.loadingService.show();

    this.getPostList();
  }
}
