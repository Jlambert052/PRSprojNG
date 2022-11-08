import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrls: ['./request-change.component.css']
})
export class RequestChangeComponent implements OnInit {

  pageTitle: string = "Edit Request";
  request!: Request;
  isDetail: boolean = false;
  users: User[] = [];

  constructor(
    private reqsvc: RequestService,
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request updated.");
        this.router.navigateByUrl("/requests/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
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
