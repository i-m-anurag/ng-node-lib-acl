import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users/users-page.component';
import { RolesPageComponent } from './pages/roles/roles-page.component';
import { PermissionsPageComponent } from './pages/permissions/permissions-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersPageComponent },
  { path: 'roles', component: RolesPageComponent },
  { path: 'permissions', component: PermissionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
