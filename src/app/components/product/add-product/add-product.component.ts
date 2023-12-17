import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddProductRequest } from '../models/AddProductRequest';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  model: AddProductRequest;
  private addProductSubscription?: Subscription;



  constructor(private service: ProductService, private router: Router) {
    this.model = {
      name: '',
      description: '',
      purchasePrice: 0,
      salePrice: 0,
      categoryId: 0
    }
  }

  onFormSubmit() {
    console.log(this.model);
    this.service.addProduct(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('products');
        console.log('Successfully Added');
      },
    });
  }


  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.addProductSubscription?.unsubscribe();
  }

}
