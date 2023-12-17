import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProductRequest } from '../models/UpdateProductRequest';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: string | null = null;
  paramSubscription?: Subscription;
  editProductSubscription?: Subscription;
  product?: Product


  constructor(private route: ActivatedRoute, private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          //get the data from the API for this category
          this.service.productById(this.id)
            .subscribe({
              next: (res) => {
                this.product = res;
              }
            })
        }
      }
    });
  }

  onSubmitForm(): void {
    const updateProductRequest: UpdateProductRequest = {
      name: this.product?.name ?? '',
      description: this.product?.description ?? '',
      purchasePrice: Number(this.product?.purchasePrice) ?? 0,
      salePrice: Number(this.product?.salePrice) ?? 0,
      categoryId: Number(this.product?.categoryId) ?? 0,
    };
    //pass object to service
    if (this.id) {
      this.editProductSubscription = this.service.updateProduct(this.id, updateProductRequest)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/products')
          }
        })
    }
  }

  onDelete(): void {
    if (this.id) {
      this.service.deleteProduct(this.id).subscribe((res) => {
        this.router.navigateByUrl('/products')
      })
    }
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }


}
