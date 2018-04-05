import { Component, OnInit } from '@angular/core';

import { LoadingService } from '../../core/util/loading.service';
import { PostService } from '../../core/api/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
    private postService: PostService
  ) { }

  ngOnInit() {

    this.postService.list().subscribe( data => {

      console.log("data: ", data);
    })
  }

}
