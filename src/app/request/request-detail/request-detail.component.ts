import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {


  pageTitle: string = "Request Details"
  confirmDelete: boolean = true;
  isDetail: boolean = true;
  request!: Request;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router : Router
  ) { }

  remove(): void {
    this.confirmDelete = !this.confirmDelete;
  }

  verifyDelete(): void {
    this.reqsvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.debug("Request deleted");
        this.router.navigateByUrl("/requests/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      }
    })
  }

}
