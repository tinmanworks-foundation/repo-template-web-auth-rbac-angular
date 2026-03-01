import type { Permission, Scope, SessionContext } from '../../contracts/auth';

export function can(permission: Permission, _scope: Scope, context: SessionContext): boolean {
  return context.bindings.some((binding) =>
    binding.permissions.some(
      (candidate) =>
        candidate.action === permission.action && candidate.resource === permission.resource,
    ),
  );
}
