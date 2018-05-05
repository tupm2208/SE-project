import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import 'rxjs/add/operator/filter';

import { LoadingService } from '../../core/util/loading.service';
import { PostService } from '../../core/api/post.service';
import { encodeUriQuery } from '@angular/router/src/url_tree';


@Component({
  selector: 'app-search',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private postList: Array<any> = [];
  private page: any;
  private numberResults: Number;
  private categoryID: Number;

  constructor(
    private loadingService: LoadingService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.loadingService.show();

    this.route.params
      .subscribe(params => {
        this.categoryID = params.id
      });
    this.route.queryParams
      .subscribe( params => {
        this.page = params.page ? params.page: 1
      })
      this.getPostList();
  }

  getPostList() {
    var param = { 
      page: this.page,
      categoryID: this.categoryID,
    }
    console.log(param);
    this.postService.getByCategory(param).subscribe( data => {
      this.postList = data;
      this.numberResults = this.postList.length;
      this.loadingService.hide();
    }, error => {
      this.loadingService.hide();
    })
  }

  loadNextPage() {
    this.page = this.page - - 1;
    this.router.navigate(["main/category",this.categoryID], {queryParams: {page: this.page}});
    this.getPostList();
  }
  loadPreviousPage() {
    this.page = this.page - 1;
    this.router.navigate(["main/category",this.categoryID], {queryParams: {page: this.page}});
    this.getPostList();
  }
}
