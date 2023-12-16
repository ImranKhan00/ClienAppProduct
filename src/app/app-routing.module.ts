import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'category/add',
    component: AddCategoryComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'category/edit/:id',
    component: EditCategoryComponent
  },
  {
    path: 'product/add',
    component: AddProductComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
