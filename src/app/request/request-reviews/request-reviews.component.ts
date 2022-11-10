import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-reviews',
  templateUrl: './request-reviews.component.html',
  styleUrls: ['./request-reviews.component.css']
})
export class RequestReviewsComponent implements OnInit {

  pageTitle: string = "Reviewable Requests";
  requests: Request[] = [];
  reviews: Request[] = [];
  user!: User;

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private usersvc: UserService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
  this.user = this.sys.user
  console.log(this.user);
  this.reqsvc.list().subscribe({
    next: (res) => {
      console.debug("Requests:", res);
      this.requests = res;
      for(let r of this.requests) {
        if(r.status === "REVIEW" && this.user.id !== r.userId) {
         this.reviews.push(r);
        }
      }
      console.log("Reviews:", this.reviews);
    },
    error: (err) => {
    console.error(err);
  }
  })
  }

}
