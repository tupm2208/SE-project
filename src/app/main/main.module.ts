import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainRoutes } from './main.routes';
import { EditorModule } from '@tinymce/tinymce-angular';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { BrefPostComponent } from './home/bref-post/bref-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    EditorModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    PostComponent,
    BrefPostComponent,
    EditPostComponent
  ]
})
export class MainModule { }
