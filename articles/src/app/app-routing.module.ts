import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
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
  { path: 'add-form', loadChildren: './category/add-form/add-form.module#AddFormPageModule' },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },  { path: 'first', loadChildren: './analytics/first/first.module#FirstPageModule' },
  { path: 'two', loadChildren: './analytics/two/two.module#TwoPageModule' },
  { path: 'free', loadChildren: './analytics/free/free.module#FreePageModule' },
  { path: 'freeff', loadChildren: './analytics/freeff/freeff.module#FreeffPageModule' },
  { path: 'order-categories', loadChildren: './add-order/order-categories/order-categories.module#OrderCategoriesPageModule' },
  { path: 'order-posisions', loadChildren: './add-order/order-posisions/order-posisions.module#OrderPosisionsPageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule {}
