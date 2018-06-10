import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormatService } from '../../core/util/format.service';
import { PostService } from '../../core/api/post.service'
import { LoadingService } from '../../core/util/loading.service';
import { StorageService } from '../../core/util/storage.service';
import { DialogService } from '../../core/dialog/dialog.service';

declare let $: any;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  private postDetail: any = {};
  private id: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private formatService: FormatService,
    private loading: LoadingService,
    private storageService: StorageService,
    private dialog: DialogService,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.postDetail = this.storageService.get('preview' + this.id);

    if(this.postDetail) {
      $('#display').html(this.postDetail.content);
      this.postDetail.subtitle = this.getSubtitle();
      
      console.log("postDetail: ",this.postDetail)
    }
    console.log("preview: ", 'preview'+this.id);

    $(".share-btn").click((e) => {
      e.preventDefault();
      return false;
    })
  }

  post() {

    this.loading.show();
    
    if (this.postDetail && this.postDetail.ID) {

      this.postService.edit(this.postDetail).subscribe(data => {

        this.loading.hide();

        console.log("regist post: ", data);
        this.success();
      }, error => {

        this.loading.hide();
        this.dialog.showError("Something goes wrong! Try again!");
      })

      return;
    }

    this.postService.post(this.postDetail).subscribe(data => {

      this.loading.hide();

      this.postDetail = data.data;
      console.log("regist post: ", data);

      this.success();
    }, error => {

      this.loading.hide();
      this.dialog.showError("Something goes wrong! Try again!");
    })
  }

  success() {

    console.log("preview: ", this.postDetail);
    this.dialog.showSuccess("Your new post has been created").subscribe( data => {

      this.storageService.set('preview' + this.id, null);

      this.router.navigate(['/main/post/'+ this.postDetail.ID])
    })
  }

  getSubtitle() {
    let str;
    str = $('#display').find('p').filter( function(){
      return ( $.trim($(this).text()).length ); 
    }).first().html()
    return this.strip_html_tags(str);
  }

  strip_html_tags(str) {
    if ((str===null) || (str===''))
        return "";
    else
    str = str.toString();
    return str.replace(/<[^>]*>/g, '');
  }

}
