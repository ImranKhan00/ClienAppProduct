export interface AddProductRequest {
  name: string;
  description: string;
  salePrice: number;
  purchasePrice: number;
  categoryId: number;
}
