import { Injectable } from '@angular/core';

@Injectable()
export class AclService {
  /** TODO: Implement setRoles */
  setRoles(roles: any[]): void {}

  /** TODO: Implement getRoles */
  getRoles(): any {}

  /** TODO: Implement getRolesSnapshot */
  getRolesSnapshot(): any[] {
    return [];
  }

  /** TODO: Implement hasPermission */
  hasPermission(resource: string, action: string): boolean {
    return false;
  }

  /** TODO: Implement hasRole */
  hasRole(roleName: string): boolean {
    return false;
  }

  /** TODO: Implement clear */
  clear(): void {}
}
