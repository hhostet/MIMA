import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'module-zero',
    loadChildren: () => import('./module-zero/module-zero.module').then( m => m.ModuleZeroPageModule)
  },
  {
    path: 'module-one',
    loadChildren: () => import('./module-one/module-one.module').then( m => m.ModuleOnePageModule)
  },
  {
    path: 'module-two',
    loadChildren: () => import('./module-two/module-two.module').then( m => m.ModuleTwoPageModule)
  },
  {
    path: 'module-three',
    loadChildren: () => import('./module-three/module-three.module').then( m => m.ModuleThreePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
