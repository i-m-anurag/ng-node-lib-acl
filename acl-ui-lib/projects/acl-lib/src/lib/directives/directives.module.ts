import { NgModule } from '@angular/core';
import { AclHasPermissionDirective } from './acl-has-permission.directive';
import { AclHasRoleDirective } from './acl-has-role.directive';

@NgModule({
  declarations: [AclHasPermissionDirective, AclHasRoleDirective],
  exports: [AclHasPermissionDirective, AclHasRoleDirective],
})
export class AclDirectivesModule {}
