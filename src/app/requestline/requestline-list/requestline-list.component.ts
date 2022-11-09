import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  pageTitle: string = "Request Lines";
  request!: Request;

  constructor(
    private reqsvc: RequestService,
    private reqlinesvc: RequestlineService,
    private sys: SystemService,
    private route: ActivatedRoute
  ) { }

  reviewCheck(): void {
    console.log(this.request);  
    this.request.rejectionReason = "";
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("Status Reviewed");
        this.Init();
      },
      error: (err) => {
        console.error(err);
      }
    });
    
  }

  verifyDelete(id: number): void {
    this.reqlinesvc.remove(id).subscribe({
      next: (res) => {
        console.debug("Line deleted.");
        this.Init();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  Init(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.Init();
  }

}
