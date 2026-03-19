import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/users" routerLinkActive="active">Users</a>
      <a routerLink="/roles" routerLinkActive="active">Roles</a>
      <a routerLink="/permissions" routerLinkActive="active">Permissions</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
