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

  private init = {
    selector: 'textarea',
    height: 500,
    theme: 'modern',
    plugins: [
      'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      'searchreplace wordcount visualblocks visualchars code fullscreen',
      'nonbreaking save table contextmenu directionality',
      'emoticons template paste textcolor colorpicker textpattern imagetools',
      'image code',
    ],
    toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    toolbar2: 'print preview media | forecolor backcolor emoticons',
    image_advtab: true,
    // enable title field in the Image dialog
    image_title: true,
    // enable automatic uploads of images represented by blob or data URIs
    automatic_uploads: true,
    plugin_preview_width: 650,
    // add custom filepicker only to Image dialog
    file_picker_types: 'image',
    file_picker_callback: function (cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        console.log("this: ", this);
        interface HTMLInputEvent extends Event {
            target: HTMLInputElement & EventTarget;
        }
        input.onchange =  function(e?: HTMLInputEvent) {

            console.log("this.file: ", cb, value, meta);
            var file = e.target.files[0];
            var reader = new FileReader();

            reader.onload = function () {
                var id = 'blobid' + (new Date()).getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                // call the callback and populate the Title field with the file name
                cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
        };

        input.click();
    }
  }

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

      setTimeout( () => {
        $("#display").html(this.dataModel);
      }, 50);

      if(data) {

        this.registData = data;

        this.dataModel = this.registData.content;
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

      console.log("preview Data: ", data1);

      setTimeout( () => {
        $("#display").html(this.dataModel);
      }, 50);

      if(data1) {

        this.registData = data1;

        this.dataModel = this.registData.content;
      }
      this.loading.hide();
    })
  }

  change() {

     $("#display").html(this.dataModel);
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

  regist() {

    this.post().subscribe(data => {

      this.registData.content = $('#display').html();

      if (this.registData.ID) {

        this.postService.edit(this.registData).subscribe(data => {

          this.loading.hide();

          console.log("regist post: ", data);
          this.success();
        }, error => {

          this.loading.hide();
          this.dialog.showError("Something goes wrong! Try again!");
        })

        return;
      }

      this.postService.post(this.registData).subscribe(data => {

        this.loading.hide();

        this.registData = data.data;
        console.log("regist post: ", data);

        this.success();
      }, error => {

        this.loading.hide();
        this.dialog.showError("Something goes wrong! Try again!");
      })
    })
  }

  success() {

    this.dialog.showSuccess().subscribe( data => {

      this.router.navigate(['/main/post/'+ this.registData.ID])
    })
  }

  checkValid() {

    if(!this.registData.title) {

      this.dialog.showError("Empty title!");
      return false;
    }

    if(!this.dataModel) {

      this.dialog.showError("Empty content!");
      return false;
    }

    return true;
  }

  preview() {

    this.post().subscribe( data => {

      this.registData.content = $('#display').html();

      this.storageService.set('preview' + this.id, this.registData);
      console.log("pre: ", this.storageService.get('preview'+this.id));

      this.loading.hide();

      this.router.navigate(['main/preview/'+ this.id]);
    }, error => {

      this.loading.hide();
    })
  }
}
