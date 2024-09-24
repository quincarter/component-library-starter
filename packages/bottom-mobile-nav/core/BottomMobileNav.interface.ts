export interface IBottomMobileNavComponent {}

export interface NavItem {
  name: string;
  path: string;
  directory?: string;
  filePath?: string;
  levelOfAccess?: string[];
  action?: () => {};
  children?: NavItem[];
  component?: string;
  tagName?: string;
  icon?: IconType;
  userHasPermission?: boolean;
  active?: boolean;
}

export declare type IconType = 'test' | 'home';
