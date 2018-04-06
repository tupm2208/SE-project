import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ContactComponent } from './contact/contact.component';


export const MainRoutes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'post/:id',
    component: PostComponent
}, {
    path: 'contact',
    component: ContactComponent
}];