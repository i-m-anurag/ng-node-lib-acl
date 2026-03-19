/** Centralized constants for ACL action names and common resource identifiers */
export const ACL_ACTIONS = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
} as const;

export const ACL_RESOURCES = {
  USERS: 'users',
  ROLES: 'roles',
  PERMISSIONS: 'permissions',
} as const;

export type AclAction = typeof ACL_ACTIONS[keyof typeof ACL_ACTIONS];
export type AclResource = typeof ACL_RESOURCES[keyof typeof ACL_RESOURCES];
