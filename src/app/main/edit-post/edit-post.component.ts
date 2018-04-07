import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from '../../core/api/category.service';
import { PostService } from '../../core/api/post.service';
import { ImageService } from '../../core/api/image.service';
import { LoadingService } from '../../core/util/loading.service';
import { DialogService } from '../../core/dialog/dialog.service';
import { LoginService } from '../../core/api/login.service';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.loading.show();

    this.loginService.refreshKey().subscribe( data => {
      
      this.loading.hide();

      this.display = true;
    }, error => {

      this.loading.hide();
    })

    let id = this.route.snapshot.paramMap.get('id');

    this.registData.categoryID = '1';
    this.registData.title = '';

    if(id) {

      this.initForEdit(id);
    }

    this.categoryService.list().subscribe( data => {

      this.categoryList = data;

      this.display = true;
      this.loading.hide();
    })
  }

  initForEdit(id) {

    this.postService.getById(id).subscribe( data => {

      this.registData = data.data;
      this.dataModel = this.registData.content;
      this.loading.hide();
    })
  }

  change() {

     $("#display").html(this.dataModel);
  }

  post() {

    if(!this.checkValid()) return false;

    this.loading.show();

    let imgList = $('img');

    let count = 0;

    imgList.toArray().forEach(element => {
      
      if(element.src.indexOf('data') == 0) {

        count++;

        let params: any = {
          imageURI: element.src
        }

        this.imageService.post(params).subscribe( data => {

          console.log("data image: ", data);
          element.src = data.imageUrl;
          count--;

          if(count == 0) {

            this.regist();
          }
        })
      }
    });

    if(!count || !imgList.length) {
      
      this.regist();
    }
  }

  regist() {

    this.registData.content = $('#display').html();

    if(this.registData.ID) {

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
}
