import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './components/hooks/hooks.component';
import { LoginComponent } from './components/login/login.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ProtectedRouteGuard } from './guards/protected-route.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'peliculas',
    canActivate: [ProtectedRouteGuard],
    loadChildren: () => import('./features/movies/movies.module').then( m => m.MoviesModule)
  },
  {
    path: 'mi-cuenta',
    component: MyAccountComponent
  },
  {
    path: 'hooks',
    component: HooksComponent
  },
  {
    path: '' ,
    redirectTo: 'peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
