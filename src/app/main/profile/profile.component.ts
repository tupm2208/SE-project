import { Component, OnInit } from '@angular/core';

import { LoadingService } from '../../core/util/loading.service';
import { DialogService } from '../../core/dialog/dialog.service';
import { LoginService } from '../../core/api/login.service';
import { UserService } from '../../core/api/user.service';
import { StorageService } from '../../core/util/storage.service';
import { ImageService } from '../../core/api/image.service';

declare let $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private type: Number;
  private user: any = {};

  constructor(
    private loading: LoadingService,
    private dialog: DialogService,
    private loginService: LoginService,
    private userService: UserService,
    private storageService: StorageService,
    private imageService: ImageService
  ) { }

  ngOnInit() {

    this.user.profilePicture = 'assets/img/avatar.png';

    let id = this.storageService.get('id');

    console.log("id: ", id);

    this.loading.show();
    this.loginService.refreshKey().subscribe( data => {

      this.userService.get(id).subscribe( data => {

        this.user = data.data

        console.log("data: ", this.user);

        this.type = 1;
        this.loading.hide();
      })
    }, error => {

      this.loading.hide();
    })
  }

  post() {

    this.loading.show();

    this.userService.update(this.user).subscribe( data => {

      console.log("data: ", data);

      this.dialog.showSuccess("Change ok!");
      this.loading.hide();
    }, error => {

      console.log("data: ", error);
      this.dialog.showError('failed to change!');
      this.loading.hide();
    })
  }

  uploadData: any;

  onFileChange(event) {

    if (event.target.files.length > 0) {
      
      this.uploadData = event.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(this.uploadData);

      reader.onload  = () => {

        this.user.profilePicture = reader.result;

        this.loading.show();

        this.imageService.post({imageURI: this.user.profilePicture}).subscribe( data => {

          this.user.profilePicture = data.imageUrl;

          this.loading.hide();
        }, error => {

          this.loading.hide();
        })
      }
    }
  }
}
