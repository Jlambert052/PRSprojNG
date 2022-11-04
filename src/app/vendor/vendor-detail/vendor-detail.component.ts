import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  pageTitle: string = "Vendor Detail";
  isDetail: boolean = true;
  vendor!: Vendor;
  showVerifyButton: boolean = false;
  
  constructor(
    private vensvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

confirm(): void {
  this.showVerifyButton = !this.showVerifyButton;
}

verifyDelete(): void {
  this.vensvc.remove(this.vendor.id).subscribe({
    next: (res) => {
      console.debug("Vendor Deleted");
      this.router.navigateByUrl("/vendors/list");
    },
    error: (err) => {
      console.error(err);
    }
  })
}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vensvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
