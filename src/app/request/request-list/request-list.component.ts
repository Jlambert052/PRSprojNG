import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requestline } from 'src/app/requestline/requestline.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  pageTitle: string = "Request List"
  request!: Request;
  requests: Request[] = [];
  searchCriteria: string = "";

  constructor(
    private reqsvc: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
