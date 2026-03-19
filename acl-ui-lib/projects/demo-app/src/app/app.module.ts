import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AclLibModule } from '@acl-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './pages/users/users-page.component';
import { RolesPageComponent } from './pages/roles/roles-page.component';
import { PermissionsPageComponent } from './pages/permissions/permissions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    RolesPageComponent,
    PermissionsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AclLibModule.forRoot({ apiUrl: '/api' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
