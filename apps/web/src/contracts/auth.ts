export type Scope = {
  type: 'global' | 'tenant' | 'resource';
  id?: string;
};

export type Permission = {
  action: string;
  resource: string;
};

export type Principal = {
  id: string;
  roles: string[];
};

export type RoleBinding = {
  role: string;
  permissions: Permission[];
};

export type SessionContext = {
  principal: Principal;
  bindings: RoleBinding[];
};
