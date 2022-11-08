import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { UserService } from 'src/app/user/user.service';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

menus: Menu[] = [
  new Menu("Home", "/home"),
  new Menu("Users", "/users/list"),
  new Menu("Vendors", "/vendors/list"),
  new Menu("Products", "/products/list"),
  new Menu("Requests", "/requests/list"),
  new Menu("Reviews", "/requests/reviews"),
  new Menu("About", "/about"),
  new Menu("Logout", "/users/login")
]

  hideReviewer: boolean = true;

  constructor(
    private sys: SystemService,
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    let reviewer = this.sys.user
    //come back later for hiding reviews tab
  }

}
