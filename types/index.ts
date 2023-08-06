export interface CoffeeBeanInfoType {
  name: string;
  origin: string;
  weight: number;
  roasting: string[];
  feature: string[];
  description: string;
};

export interface MenuItemListType {
  name: string;
  items: string[];
}

export interface RoastingItemsType {
  name: string;
  category: string;
}

export interface RoastingDocsType {
  name: string;
  level: number;
  description: string;
}