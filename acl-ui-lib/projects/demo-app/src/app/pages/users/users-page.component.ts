import { Component } from '@angular/core';

/** Demo page that loads the ACL UserComponent to verify end-to-end connectivity */
@Component({
  selector: 'app-users-page',
  template: `
    <h1>Users Page (Demo)</h1>
    <acl-user></acl-user>
  `,
})
export class UsersPageComponent {}
