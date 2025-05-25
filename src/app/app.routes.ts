import { Routes } from '@angular/router';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './pages/home/home.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { FormComponent } from './pages/form/form.component';
import { TokenViewComponent } from './pages/token-view/token-view.component';
import { BeersComponent } from './pages/beers/beers.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "beers", component: BeersComponent },
    { path: "token", component: TokenViewComponent, canActivate: [autoLoginPartialRoutesGuard] },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'callback', component: CallbackComponent }
];
