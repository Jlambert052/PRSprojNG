import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent implements OnInit {

  pageTitle: string = "Change Vendor";
  vendor!: Vendor;

  constructor(
    private router: Router,
    private vensvc: VendorService,
    private route: ActivatedRoute
  ) { }

    save(): void {
      this.vensvc.change(this.vendor).subscribe({
        next: (res) => {
          console.debug("Vendor Changed", res);
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
