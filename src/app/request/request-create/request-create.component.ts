import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  pageTitle: string = "Create Request";
  request: Request = new Request;
  user!: User;
  isDetail: boolean = false;
  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  save(): void {
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request created.");
        this.router.navigateByUrl("/requests/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
   this.request.userId = this.sys.user.id
   this.user = this.sys.user
    console.debug("Logged in User:", this.sys.user)
  }

}
