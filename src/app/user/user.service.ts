import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../common/system.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = `${this.sys.baseurl}/users`;
  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  // add methods below
}
