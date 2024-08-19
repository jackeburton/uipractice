export type SubMenuItem = { name: string; selected: boolean };
export type SubMenu = SubMenuItem[];

export type MenuItem = {
  name: string;
  selected: boolean;
  submenu: SubMenu | False;
};
export type MenuItems = MenuItem[];
