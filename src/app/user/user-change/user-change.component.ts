import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent implements OnInit {

  isDetail: boolean = false;
  pageTitle: string = "Edit User";
  //use alongside *ngIf to prevent the async loading error. 
  user!: User;
  constructor(
    //allows access and usage of http methods
    private usersvc: UserService,
    //allows rerouting/moving to page after an action has been taken
    private router: Router,
    //allows snapshotting/accessing information through routes temporarily such as parameters of a class (id)
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.usersvc.change(this.user).subscribe({
      next: (res) => {
        console.debug("User Changed Successfully");
        this.router.navigateByUrl("/users/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
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
