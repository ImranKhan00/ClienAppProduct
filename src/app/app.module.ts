import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryListComponent,
    EditCategoryComponent,
    AddProductComponent,
    ProductListComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
