import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './models/Product';
import { UpdateProductRequest } from './models/UpdateProductRequest';
import { AddProductRequest } from './models/AddProductRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(model: AddProductRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/products`, model);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/products`);
  }

  productById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiBaseUrl}/api/products/${id}`);
  }

  updateProduct(id: string, updateCategoryRequest: UpdateProductRequest): Observable<Product> {
    return this.http.put<Product>(`${environment.apiBaseUrl}/api/products/${id}`, updateCategoryRequest);
  }
  // updateData(data: any, id: string): Observable<any> {
  //   return this.http.patch(`${environment.apiBaseUrl}/api/categories/${id}`, data)
  // }
  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${environment.apiBaseUrl}/api/products/${id}`);
  }
}
