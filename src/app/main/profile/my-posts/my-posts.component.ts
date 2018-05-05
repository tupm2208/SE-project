import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import 'rxjs/add/operator/filter';

import { LoadingService } from '../../../core/util/loading.service';
import { PostService } from '../../../core/api/post.service';
import { StorageService } from '../../../core/util/storage.service';
import { DialogService } from '../../../core/dialog/dialog.service';


@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  private postList: Array<any> = [];
  private page: number = 1;
  @Input() user: any;

  private params: any = {};

  constructor(
    private loadingService: LoadingService,
    private postService: PostService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {

    this.postList = this.user.posts;

    let tem = JSON.parse(JSON.stringify(this.user));

    delete tem.posts;

    this.postList.forEach( element => {

      element.author = tem;
    })
    
    console.log("post: ", this.postList);
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

  delete(data) {

    console.log("delete: ", data);

    this.loadingService.show();

    this.postService.delete(data.ID).subscribe( data => {

      this.dialogService.showSuccess("delete successfull!");
      this.postList.splice(this.postList.indexOf(data),1);
      this.loadingService.hide();
    }, error => {

      console.log("failed!");
      this.loadingService.hide();
      this.dialogService.showError("failed to delete this post");
    })
    
  }
}
