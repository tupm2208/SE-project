import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainRoutes } from './main.routes';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrefPostComponent } from './home/bref-post/bref-post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
  ],
  declarations: [
    HomeComponent,
    PostComponent,
    AboutComponent,
    ContactComponent,
    BrefPostComponent
  ]
})
export class MainModule { }
