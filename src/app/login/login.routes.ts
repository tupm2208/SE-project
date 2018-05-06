import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

export const LoginRouters: Routes = [
    {
        path: '',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'forgetpassword',
        component: ForgetPasswordComponent
    }
]