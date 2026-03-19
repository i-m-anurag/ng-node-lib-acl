import { Role } from './role.model';

/** Represents a user in the ACL system */
export interface User {
  id: string;
  username: string;
  email: string;
  roles: Role[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
