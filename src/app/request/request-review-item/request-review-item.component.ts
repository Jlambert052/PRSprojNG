import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  pageTitle: string = "Request Review";
  request!: Request;
  isReject: boolean = true;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  approve(): void {
    this.request.status = "APPROVED";
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request approved");
        this.router.navigateByUrl("/requests/reviews");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  reject(): void {
    this.isReject = !this.isReject;
  }

  verifyReject(): void {
    if(this.request.rejectionReason === "") {
      alert("Reason Required.");
    } else {
      this.request.status = "REJECTED";
      console.log(this.request);
      this.reqsvc.change(this.request).subscribe({
        next: (res) => {
          console.debug("Request Rejected");
          this.router.navigateByUrl("/requests/reviews")
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }

  Init(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) =>{
        console.debug("Request to Review:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.Init();

  }

}
