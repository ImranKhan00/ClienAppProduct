import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../models/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { UpdateCategoryRequest } from '../models/UpdateCategoryRequest';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
  template: `
    <app-category-list (delete)="onDelete()"></app-category-list>
  `,
})
export class EditCategoryComponent implements OnInit {
  id: string | null = null;
  paramSubscription?: Subscription;
  editCategorySubscription?: Subscription;
  category?: Category

  constructor(private route: ActivatedRoute, private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          //get the data from the API for this category
          this.service.categoryById(this.id)
            .subscribe({
              next: (res) => {
                this.category = res;
              }
            })
        }
      }
    });
  }

  onSubmitForm(): void {
    const updateCategoryRequest: UpdateCategoryRequest = {
      name: this.category?.name ?? '',
    };
    //pass object to service
    if (this.id) {
      this.editCategorySubscription = this.service.updateCategory(this.id, updateCategoryRequest)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/categories')
          }
        })
    }
  }

  onDelete(): void {
    if (this.id) {
      this.service.deleteCategory(this.id).subscribe((res) => {
        this.router.navigateByUrl('/categories')
      })
    }
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.editCategorySubscription?.unsubscribe();
  }
}
