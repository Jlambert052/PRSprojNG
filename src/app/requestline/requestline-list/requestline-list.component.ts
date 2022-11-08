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
  requestlines: Requestline[] = [];

  constructor(
    private reqsvc: RequestService,
    private reqlinesvc: RequestlineService,
    private sys: SystemService,
    private route: ActivatedRoute
  ) { }

  reviewCheck(): void {

  }

  ngOnInit(): void {
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

}
