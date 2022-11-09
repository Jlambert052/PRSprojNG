import { Vendor } from "../vendor/vendor.class";

export class Product {

    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "";
    photopath: string = "";
    vendor!: Vendor;    
    vendorId: number = 0;
}