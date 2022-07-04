import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),

  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then(m => m.SearchResultPageModule)
  },
  {
    path: 'etablissement',
    loadChildren: () => import('./etablissement/etablissement.module').then(m => m.EtablissementPageModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
