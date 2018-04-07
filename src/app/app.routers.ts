import {Routes} from '@angular/router';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },{
        path: 'main',
        loadChildren: './main/main.module#MainModule'
    }, {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    }
]