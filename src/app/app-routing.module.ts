import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './component/dashboard/view/view.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostformComponent } from './component/postform/postform.component';
import { UpdateformComponent } from './component/updateform/updateform.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
 
 
  {path:'dashboard', component:DashboardComponent},
  {path:'view/:viewid', component:ViewComponent},
  {path: 'postform', component:PostformComponent},
  {path: 'updateform', component:UpdateformComponent}

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
