import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = "User Detail";
  isDetail: boolean = true; //use for not allowing changes if detail vs change
  isUser: boolean = false; //investigating on how to have password changing only show for user that is logged in.
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService
  ) { }

    showVerifyButton: boolean = false;

    remove(): void {
      this.showVerifyButton = !this.showVerifyButton;
    }

    verifyDelete(): void {
      this.usersvc.remove(this.user.id).subscribe({
        next: (res) => {
          console.debug("User Deleted");
          this.router.navigateByUrl("/user/list");
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
