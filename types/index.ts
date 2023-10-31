export interface CoffeeBeanInfoType {
  name: string;
  name_en: string;
  origin: string;
  weight: number;
  roasting: string[];
  feature: string[];
  description: string;
  price: number;
  quantity?: number;
  blendingList?: string[];
  image?: string;
}

export interface MenuItemListType {
  name: string;
  items: string[];
}

export interface RoastingItemsType {
  name: string;
  category: string;
  color: string;
}

export interface RoastingDocsType {
  name: string;
  level: number;
  description: string;
  short_description: string;
}

export interface InputNameType {
  title: string;
  category: string;
}