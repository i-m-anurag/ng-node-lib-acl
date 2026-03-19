/** Defines the permission data structure used throughout the ACL system */
export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete';
  description?: string;
}

export interface PermissionSet {
  permissions: Permission[];
  resourceGroup: string;
}
