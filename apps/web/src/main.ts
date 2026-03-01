import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { can } from './app/core/policy';
import type { SessionContext } from './contracts/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main style="font-family: system-ui; max-width: 960px; margin: 0 auto; padding: 24px;">
      <h1>Auth + RBAC Template (Angular)</h1>
      <p>Policy check: {{ policyResult }}</p>
      <p>External API base URL is configured via environment replacement at integration time.</p>
    </main>
  `,
})
class AppComponent {
  policyResult = false;

  constructor() {
    const context: SessionContext = {
      principal: { id: 'principal-001', roles: ['member'] },
      bindings: [
        {
          role: 'member',
          permissions: [{ action: 'read', resource: 'dashboard' }],
        },
      ],
    };

    this.policyResult = can({ action: 'read', resource: 'dashboard' }, { type: 'global' }, context);
  }
}

const routes: Routes = [];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((error) => console.error(error));
