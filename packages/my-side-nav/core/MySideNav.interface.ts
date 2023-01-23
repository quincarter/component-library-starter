export interface IMySideNavComponent {
  navLinks: NavLinks[] | undefined;
}

export interface NavLinks {
  name: string;
  link: string;
  icon?: string;
  children?: NavLinks[];
}
