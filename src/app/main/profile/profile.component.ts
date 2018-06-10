import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
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
  private isUser: Boolean = false;
  private pageUserId: Number;

  constructor(
    private loading: LoadingService,
    private dialog: DialogService,
    private loginService: LoginService,
    private userService: UserService,
    private storageService: StorageService,
    private imageService: ImageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.user.profilePicture = 'assets/img/avatar.png';

    this.route.params // verify user
      .subscribe( params => {
        if(!params.id) { // no params id, enter user profile
          this.isUser = true;
          this.pageUserId = this.storageService.get('id');
        } 
        else {
          if(params.id == this.storageService.get('id'))  {
            this.isUser = true;
            this.pageUserId = this.storageService.get('id');
          }
          else { // user as guest to other's profile
            this.isUser = false;
            this.pageUserId = params.id
          }
        }
      })

    this.loading.show();
      this.userService.get(this.pageUserId).subscribe( data => {
        
        this.user = data.data

        this.type = 1;
        this.loading.hide();
      }, err => {
          this.dialog.showError();
      })
  }

  post() {

    this.loading.show();

    this.userService.update(this.user).subscribe( data => {

      this.dialog.showSuccess("Your personal information has been modified successfully!");
      this.loading.hide();
    }, error => {
      this.dialog.showError('Failed to change!');
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
