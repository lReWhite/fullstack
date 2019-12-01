import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
   { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'observable', loadChildren: './observable/observable.module#ObservablePageModule' },
  { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'add-order', loadChildren: './add-order/add-order.module#AddOrderPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'menu-example', loadChildren: './menu-example/menu-example.module#MenuExamplePageModule' },
  { path: 'form', loadChildren: './category/form/form.module#FormPageModule' },
  { path: 'add-form', loadChildren: './category/add-form/add-form.module#AddFormPageModule' },  { path: 'start', loadChildren: './start/start.module#StartPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule {}
