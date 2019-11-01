import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'postlist', loadChildren: './postlist/postlist.module#PostlistPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'observable', loadChildren: './observable/observable.module#ObservablePageModule' },
  { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'add-order', loadChildren: './add-order/add-order.module#AddOrderPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
