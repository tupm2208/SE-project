import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


export const MainRoutes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'post',
    component: PostComponent
}, {
    path: 'about',
    component: AboutComponent
}, {
    path: 'contact',
    component: ContactComponent
}];