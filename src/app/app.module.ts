import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FrontendLayoutComponent } from './shared/frontend-layout/frontend-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { AdminAddUserComponent } from './shared/admin-add-user/admin-add-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes : Routes = [
  {
    path:'',
    redirectTo:'front',
    pathMatch:'full'
  },
  {
    path:'front',
    component:FrontendLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:'./front/front.module#FrontModule'
      }
    ]
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:'./admin-settings/admin-settings.module#AdminSettingsModule'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    AdminLayoutComponent,
    AdminAddUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  entryComponents:[AdminAddUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
