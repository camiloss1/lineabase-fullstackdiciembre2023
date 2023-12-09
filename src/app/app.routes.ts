import { Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { HomeComponent } from './UI/components/home/home.component';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { FullscreenComponent } from './UI/layouts/fullscreen/fullscreen.component';
import { LoginComponent } from './UI/components/login/login.component';

export const routes: Routes = [
    {path: '',redirectTo:'/fullscreen/login',pathMatch:'full'},
    {
        path:'',
        component: DefaultComponent,
        children: [
            {
                path:'home',
                component: HomeComponent
            },
            {
                path:'contact',
                component:ContactusComponent
            }
        ]
    },
    {
        path:'fullscreen',
        component:FullscreenComponent,
        children : [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];
