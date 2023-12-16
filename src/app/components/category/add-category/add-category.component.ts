import { Component, OnInit } from '@angular/core';
import { AddCategoryRequest } from '../models/AddCategoryRequest';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private service: CategoryService, private router: Router) {
    this.model = {
      name: ''
    };
  }


  onFormSubmit() {
    console.log(this.model);
    this.service.addCategory(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('categories');
        console.log('Successfully Added');
      },
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

}
