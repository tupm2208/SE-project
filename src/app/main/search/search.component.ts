import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import 'rxjs/add/operator/filter';

import { LoadingService } from '../../core/util/loading.service';
import { PostService } from '../../core/api/post.service';
import { encodeUriQuery } from '@angular/router/src/url_tree';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private postList: Array<any> = [];
  private page: Number;
  private query: string;
  private numberResults: Number;

  constructor(
    private loadingService: LoadingService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.loadingService.show();

    this.route.queryParams
      .subscribe(params => {
        this.page = params.page? params.page: 1;
        this.query = params.query ? params.query : "";
        this.getPostList();
        this.query = this.query.trim();
        if(!this.query.length) this.router.navigate(["/"]);
      });
  }

  getPostList() {
    
    var param = {
      string: this.escape(this.query), 
      page: this.page,
    }
    this.postService.search(param).subscribe( data => {

      this.postList = data;
      this.numberResults = this.postList.length;
      this.loadingService.hide();
    }, error => {

      this.loadingService.hide();
    })
  }

  escapeHtml(input) {
    return input
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;")
         .replace(/./g, "&period;")
         .replace(/,/g,"&comma;")
         
 }

  escape(input) {
    var str = encodeURIComponent(input);
    return str
            .replace("%20"," ");
    
  }


}
