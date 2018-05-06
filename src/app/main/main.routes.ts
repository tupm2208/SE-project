import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PreviewComponent } from './preview/preview.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component'

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
    path: 'preview/:id',
    component: PreviewComponent
},{
    path: 'profile/:id',
    component: ProfileComponent
}, {
    path: 'profile',
    component: ProfileComponent
}, {
    path: 'search',
    component: SearchComponent
}, {
    path: 'category/:id',
    component: CategoryComponent
}];
  