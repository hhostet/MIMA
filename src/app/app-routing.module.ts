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
  },
  {
    path: 'module-seven',
    loadChildren: () => import('./module-seven/module-seven.module').then( m => m.ModuleSevenPageModule)
  },
  {
    path: 'module-six',
    loadChildren: () => import('./module-six/module-six.module').then( m => m.ModuleSixPageModule)
  },
  {
    path: 'module-five',
    loadChildren: () => import('./module-five/module-five.module').then( m => m.ModuleFivePageModule)
  },
  {
    path: 'module-four',
    loadChildren: () => import('./module-four/module-four.module').then( m => m.ModuleFourPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
