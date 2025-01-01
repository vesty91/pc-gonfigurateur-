export interface Component {
  id: string;
  name: string;
  category: ComponentCategory;
  price: number;
  brand: string;
  specs: Record<string, string>;
  imageUrl: string;
  stock: number;
}

export enum ComponentCategory {
  CPU = 'CPU',
  MOTHERBOARD = 'Motherboard',
  RAM = 'RAM',
  GPU = 'Graphics Card',
  STORAGE = 'Storage',
  PSU = 'Power Supply',
  CASE = 'Case',
  COOLING = 'Cooling'
}

export interface BuildConfiguration {
  [ComponentCategory.CPU]?: Component;
  [ComponentCategory.MOTHERBOARD]?: Component;
  [ComponentCategory.RAM]?: Component;
  [ComponentCategory.GPU]?: Component;
  [ComponentCategory.STORAGE]?: Component;
  [ComponentCategory.PSU]?: Component;
  [ComponentCategory.CASE]?: Component;
  [ComponentCategory.COOLING]?: Component;
}