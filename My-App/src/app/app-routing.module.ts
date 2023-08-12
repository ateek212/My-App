import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './roots/dashboards/dashboards.component';

const routes: Routes = [
  {path:'dashboards',component:DashboardsComponent },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
