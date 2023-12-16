import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../models/Category';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  id: string | null = null;
  categories$?: Observable<Category[]>;
  paramSubscription?: Subscription;
  category?: Category;

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
    this.categories$ = this.service.getAllCategories();
  }

  // triggerFunction(): void {
  //   console.log("button is clicked")
  //   this.delete.emit();
  // }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }
}
