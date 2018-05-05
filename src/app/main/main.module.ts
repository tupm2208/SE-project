import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainRoutes } from './main.routes';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UtilModule } from '../core/util/util.module'
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { BrefPostComponent } from './home/bref-post/bref-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PreviewComponent } from './preview/preview.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './profile/info/info.component';
import { MyPostsComponent } from './profile/my-posts/my-posts.component';
import { ChangePassComponent } from './profile/change-pass/change-pass.component';
import { CommentComponent } from './post/comment/comment.component';
import { CommentDetailComponent } from './post/comment/comment-detail/comment-detail.component';
import { SubPostComponent } from './profile/my-posts/sub-post/sub-post.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    EditorModule,
    FormsModule,
    UtilModule
  ],
  declarations: [
    HomeComponent,
    PostComponent,
    BrefPostComponent,
    EditPostComponent,
    PreviewComponent,
    ProfileComponent,
    InfoComponent,
    MyPostsComponent,
    ChangePassComponent,
    CommentComponent,
    CommentDetailComponent,
    SubPostComponent,
    SearchComponent,
    CategoryComponent,
  ]
})
export class MainModule { }
