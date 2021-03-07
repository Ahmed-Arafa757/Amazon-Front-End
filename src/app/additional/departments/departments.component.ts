import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  categories;
  constructor(
    private categoryService:CategoryService,
    private productService:ProductService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (res)=>{
        this.categories=res;
      },
      (err)=>{
        console.error(err);
      },
      ()=>{},
    )
  }
  searchByCategory(id){
    this.router.navigate(['search-results/category/'],{queryParams:{category:id}});
  }
  searchBySubCategory(sub)
  {
    this.router.navigate(['search-results/sub_category/'],{queryParams:{sub:sub}});
  }

}
