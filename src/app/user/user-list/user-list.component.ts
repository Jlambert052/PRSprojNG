import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = "User List";
  users: User[] = [];
  //add sorting func later

  constructor(
    private sys: SystemService,
    private usersvc: UserService
  ) { }

  

  ngOnInit(): void {
    // uncomment this after you dont need to check list 24/7 this.sys.checkLogin();
    this.usersvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res as User[];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
