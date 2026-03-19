import { NgModule, ModuleWithProviders } from '@angular/core';

import { DynamicModule } from './shared/dynamic-module/dynamic-module.module';
import { AclDirectivesModule } from './directives/directives.module';
import { AclPipesModule } from './pipes/pipes.module';
import { UserModule } from './components/user/user.module';
import { RoleModule } from './components/role/role.module';
import { PermissionModule } from './components/permission/permission.module';

import { AclService } from './services/acl.service';
import { PermissionService } from './services/permission.service';

export interface AclModuleConfig {
  apiUrl?: string;
}

@NgModule({
  imports: [
    DynamicModule,
    AclDirectivesModule,
    AclPipesModule,
    UserModule,
    RoleModule,
    PermissionModule,
  ],
  exports: [
    DynamicModule,
    AclDirectivesModule,
    AclPipesModule,
    UserModule,
    RoleModule,
    PermissionModule,
  ],
})
export class AclLibModule {
  static forRoot(config?: AclModuleConfig): ModuleWithProviders<AclLibModule> {
    return {
      ngModule: AclLibModule,
      providers: [
        AclService,
        PermissionService,
        {
          provide: 'ACL_MODULE_CONFIG',
          useValue: config || {},
        },
      ],
    };
  }
}
