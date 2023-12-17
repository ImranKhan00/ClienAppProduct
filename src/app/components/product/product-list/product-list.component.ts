import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$?: Observable<Product[]>;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.service.getAllProducts();
  }

}
