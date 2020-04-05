import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service'
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/modules-list/modules-list.module').then( m => m.ModulesListPageModule)
  },
  {
    path: 'modules-list',
    loadChildren: () => import('./pages/modules-list/modules-list.module').then( m => m.ModulesListPageModule)
  },
  {
    path: 'project-list',
    loadChildren: () => import('./pages/project-list/project-list.module').then( m => m.ProjectListPageModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/project-details/project-details.module').then( m => m.ProjectDetailsPageModule)
  },
  {
    path: 'project-details/:id',
    loadChildren: () => import('./pages/project-details/project-details.module').then( m => m.ProjectDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'module-one',
    loadChildren: () => import('./pages/module-one/module-one.module').then( m => m.ModuleOnePageModule)
  },
  {
    path: 'module-two',
    loadChildren: () => import('./pages/module-two/module-two.module').then( m => m.ModuleTwoPageModule)
  },
  {
    path: 'module-three',
    loadChildren: () => import('./pages/module-three/module-three.module').then( m => m.ModuleThreePageModule)
  },
  {
    path: 'module-four',
    loadChildren: () => import('./pages/module-four/module-four.module').then( m => m.ModuleFourPageModule)
  },
  {
    path: 'module-five',
    loadChildren: () => import('./pages/module-five/module-five.module').then( m => m.ModuleFivePageModule)
  },
  {
    path: 'module-six',
    loadChildren: () => import('./pages/module-six/module-six.module').then( m => m.ModuleSixPageModule)
  },
  {
    path: 'module-seven',
    loadChildren: () => import('./pages/module-seven/module-seven.module').then( m => m.ModuleSevenPageModule)
  },
  {
    path: 'module-zero',
    loadChildren: () => import('./pages/module-zero/module-zero.module').then( m => m.ModuleZeroPageModule)
  },
  {
    path: 'user-account',
    loadChildren: () => import('./pages/user-account/user-account.module').then( m => m.UserAccountPageModule), canActivate:[AuthService],
  },
  {
    path: 'uploader',
    loadChildren: () => import('./pages/uploader/uploader.module').then( m => m.UploaderPageModule), canActivate:[AuthService]
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'log-post/:id',
    loadChildren: () => import('./pages/log-post/log-post.module').then( m => m.LogPostPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
