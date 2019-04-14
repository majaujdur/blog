import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostsComponent } from './components/edit-posts/edit-posts.component';
import { UsersComponent } from './components/users/users.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  {
    path:'',
    component:EditPostsComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'stats',
    component:StatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsRoutingModule { }
