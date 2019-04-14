import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSettingsRoutingModule } from './admin-settings-routing.module';
import { EditPostsComponent, NgbdModalContent } from './components/edit-posts/edit-posts.component';
import { StatsComponent } from './components/stats/stats.component';
import { UsersComponent } from './components/users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditPostsComponent, StatsComponent, UsersComponent, NgbdModalContent],
  imports: [
    CommonModule,
    AdminSettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents:[NgbdModalContent]
})
export class AdminSettingsModule { }
