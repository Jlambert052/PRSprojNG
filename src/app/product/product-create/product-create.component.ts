import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle: string = "Create Product";
  product: Product = new Product;
  vendors: Vendor[] = [];
  

  constructor(
    private router: Router,
    private prodsvc: ProductService,
    private vendsvc: VendorService
  ) { }

  save(): void {
    //html saves it as a string you must convert to number
    this.product.vendorId = +this.product.vendorId;
    console.log(this.product);
    this.prodsvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Created.", res);
        this.router.navigateByUrl("/products/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
}

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
