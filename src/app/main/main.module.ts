import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainRoutes } from './main.routes';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
  ],
  declarations: [
    HomeComponent,
    PostComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class MainModule { }
