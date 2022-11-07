import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

pageTitle: string = "Product Detail";
product!: Product;
products: Product[] = [];
isDetail: boolean = true;
showRemove: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private prodsvc: ProductService,
    private router: Router
  ) { }

  remove(): void {
  this.showRemove = !this.showRemove;
  }

  verifyDelete(): void {
    this.prodsvc.remove(this.product.id).subscribe({
      next: (res) => {
        console.debug("Product deleted");
        this.router.navigateByUrl("/products/list");
      },
      error: (err) => {
        console.error("delete failed", err);
      }
    })
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
