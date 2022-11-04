import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';
import { VendorService } from '../vendor/vendor.service';
import { Product } from './product.class';
import { ProductService } from './product.service';

@Pipe({
  name: 'vend'
})
export class VendPipe implements PipeTransform {

  transform(vend: number, name: string): string {
    let vendor: Vendor;

    return name;
  }

}
