import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CategoryService } from '../../core/api/category.service';
import { PostService } from '../../core/api/post.service';
import { ImageService } from '../../core/api/image.service';
import { LoadingService } from '../../core/util/loading.service';
import { DialogService } from '../../core/dialog/dialog.service';
import { LoginService } from '../../core/api/login.service';
import { StorageService } from '../../core/util/storage.service';


declare let tinymce: any;
declare let $: any;

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  private dataModel: any;
  private display: Boolean = false;
  private title: String;
  private registData: any = {};
  private categoryList: Array<any> = [];
  private id: any;

  constructor(
    private categoryService: CategoryService,
    private postService: PostService,
    private imageService: ImageService,
    private loading: LoadingService,
    private dialog: DialogService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) { }

  async ngOnInit() {
    $('#summernote').summernote();

    this.loading.show();

    await this.loginService.refreshKey().toPromise().then( data => {
      
      // this.loading.hide();

      this.display = true;
    }, error => {

      this.loading.hide();
    })

    if(!this.display) return;

    this.id = this.route.snapshot.paramMap.get('id');

    this.registData.categoryID = '1';
    this.registData.title = '';

    if(Number(this.id)) {

      this.initForEdit(this.id);
    } else {

      let data = this.storageService.get('preview' + this.id);

      console.log("preview Data: ", data);

     

      if(data) {

        this.registData = data;

        this.dataModel = this.registData.content;

        $('#summernote').summernote('code',this.dataModel);
        console.log("init summernote");
      }

      this.loading.hide();
    }

    this.categoryService.list().subscribe( data => {

      this.categoryList = data;

      this.display = true;
      // this.loading.hide();
    })
  }

  initForEdit(id) {

    this.postService.getById(id).subscribe( data => {

      this.registData = data.data;
      this.dataModel = this.registData.content;

      let data1 = this.storageService.get('preview' + this.id);

      if(data1) {

        this.registData = data1;

        this.dataModel = this.registData.content;

        
      }

      $('#summernote').summernote('code', this.dataModel );

      this.loading.hide();
    })
  }


  post(): Observable<any> {

    return new Observable( observer => {

      if (!this.checkValid()) {

        observer.error();
        observer.complete();

        return;
      }

      this.loading.show();

      let imgList = $('img');

      let count = 0;

      imgList.toArray().forEach(element => {

        if (element.src.indexOf('data') == 0) {

          count++;

          console.log("image: ", count);

          let params: any = {
            imageURI: element.src
          }

          this.imageService.post(params).subscribe(data => {

            element.src = data.imageUrl;
            count--;

            if (count == 0) {

              observer.next();
              observer.complete();
            }
          })
        }
      });

      if (!count || !imgList.length) {

        observer.next();
        observer.complete();
      }

    })

    
  }


  checkValid() {

    if(!this.registData.title) {

      this.dialog.showError("Empty title!");
      return false;
    }

    if(!$('#summernote').val()) {

      this.dialog.showError("Empty content!");
      return false;
    }

    return true;
  }

  preview() {

    
    this.post().subscribe( data => {

      this.registData.content = $('#summernote').summernote('code');
      
      this.storageService.set('preview' + this.id, this.registData);
      console.log("pre: ", this.storageService.get('preview'+this.id));

      this.loading.hide();

      this.router.navigate(['main/preview/'+ this.id]);

      console.log("after upload image: ", this.registData.content);
    }, error => {

      this.loading.hide();
    })
  }
}
