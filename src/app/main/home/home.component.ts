import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import 'rxjs/add/operator/filter';

import { LoadingService } from '../../core/util/loading.service';
import { PostService } from '../../core/api/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private postList: Array<any> = [];
  private page: Number;

  constructor(
    private loadingService: LoadingService,
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.loadingService.show();

    this.route.queryParams
      .subscribe(params => {
        this.page = params.page? params.page: 1;
        this.getPostList();
      });
  }

  getPostList() {

    this.postService.list(this.page).subscribe( data => {

      this.postList = data;

      this.loadingService.hide();
    }, error => {

      this.loadingService.hide();
    })
  }
}
