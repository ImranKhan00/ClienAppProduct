export interface Product {
  id: number;
  name: string;
  description: string;
  purchasePrice: number;
  salePrice: number;
  categoryId: number;
  category: Category;
}

// category.model.ts
export interface Category {
  id: number;
  name: string;
  products: Product[];
}
