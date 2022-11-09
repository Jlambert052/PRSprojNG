import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  pageTitle: string = "Create Request Line";
  request!: Request;
  requestline: Requestline = new Requestline;
  products!: Product[];
  constructor(
    private reqlinesvc: RequestlineService,
    private reqsvc: RequestService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  save(): void {
    console.log(this.requestline)
    this.reqlinesvc.create(this.requestline).subscribe({
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
    let id = +this.route.snapshot.params["id"];
    this.requestline.requestId = id;
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
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
