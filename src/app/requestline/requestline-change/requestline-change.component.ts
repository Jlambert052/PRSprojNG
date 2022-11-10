import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrls: ['./requestline-change.component.css']
})
export class RequestlineChangeComponent implements OnInit {

  pageTitle: string = "Edit Request Line";
  requestline!: Requestline;
  products!: Product[];

  constructor(
    private reqlinesvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute,
    private prodsvc: ProductService
  ) { }

  save(): void {
    this.reqlinesvc.change(this.requestline).subscribe({
      next: (res) => {
        console.debug("Line Saved!");
        this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    let id = this.route.snapshot.params["id"]
    this.reqlinesvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request Line:", res);
        this.requestline = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
