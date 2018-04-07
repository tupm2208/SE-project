import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PreviewComponent } from './preview/preview.component';


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
    path: 'edit-post/:id',
    component: EditPostComponent
}, {
    path: 'preview',
    component: PreviewComponent
}];