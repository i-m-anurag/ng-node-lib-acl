import { Permission } from './permission.model';

/** Represents a user role with its associated permissions */
export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: Permission[];
  isActive: boolean;
}
