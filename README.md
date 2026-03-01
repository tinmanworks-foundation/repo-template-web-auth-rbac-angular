# repo-template-web-auth-rbac-angular

Generalized authenticated web template with RBAC seams using Angular and TypeScript, with an optional Electron shell.

## Status
- Stage: Draft
- Owner: <Owner>
- License: <License Name>
- Visibility: Public | Private | Internal
- Reason: <Why this visibility level is correct>
- Promotion criteria to Public: <What must be true before public release>

## What This Project Is
- A baseline for authenticated, role-based Angular web apps.
- Includes neutral access-control contracts, API boundary placeholders, and optional desktop wrapper.

## Quickstart

### Prerequisites
- Node.js 20+
- pnpm 10+

### Install
```bash
pnpm install
```

### Run Web App
```bash
pnpm dev
```

### Run Electron Shell (Dev)
```bash
ELECTRON_START_URL=http://localhost:4200 pnpm desktop:dev
```

### Checks
```bash
pnpm lint
pnpm typecheck
```

## Documentation
- [Overview](docs/overview.md)
- [Architecture](docs/architecture.md)
- [ADRs](docs/adr/)
- [Doctrine Snapshot](docs/doctrine/README.md)

## Validation
```bash
bash tools/validate-template.sh core
bash tools/validate-template.sh advisory
```

## Contributing
See `CONTRIBUTING.md`.
