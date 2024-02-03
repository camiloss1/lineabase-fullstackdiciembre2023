import { Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { HomeComponent } from './UI/components/home/home.component';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { FullscreenComponent } from './UI/layouts/fullscreen/fullscreen.component';
import { LoginComponent } from './UI/components/login/login.component';
import { RegisterComponent } from './UI/components/register/register.component';
import { authenticationGuard } from './UI/shared/guards/auth-guard.guard';
import { EventDetailComponent } from './UI/components/event-detail/event-detail.component';

export const routes: Routes = [
    {path: '',redirectTo:'/fullscreen/login',pathMatch:'full'},
    {
        path:'',
        component: DefaultComponent,
        canActivate:[authenticationGuard],
        children: [
            {
                path:'home',
                component: HomeComponent
            },
            {
                path:'eventDetail/:eventId',
                component: EventDetailComponent
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
                //fullscreen/login
                path: 'login',
                component: LoginComponent
            },
            {
                //fullscreen/register
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];
