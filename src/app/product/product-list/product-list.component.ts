import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  searchCriteria: string = "";
  products: Product[] = [];
  product!: Product;
  vendor!: Vendor;
  name: string ="";
  constructor(
    private prodsvc: ProductService,
    private sys: SystemService,
    private router: Router,
    private vendsvc: VendorService
  ) { }

  ngOnInit(): void {  
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
