import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle: string ="Vendor List";
  vendors: Vendor[] = [];
  searchCriteria: string = "";
  //search and sort funcs

  constructor(
    private vensvc: VendorService,
    private sys: SystemService,
    private router: Router
  ) { }

//sortby func

  ngOnInit(): void {
    this.vensvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


}
