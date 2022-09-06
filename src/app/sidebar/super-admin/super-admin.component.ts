import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { EncodeDecode } from 'src/app/_helpers/encode-decode';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  is_staff:any;
  usertype:any;
  constructor(private _service:ApiService,private route:Router) { }

  ngOnInit(): void {
    let decode: any = EncodeDecode('n', localStorage.getItem('LoginDetails'));
    let data: any = JSON.parse(decode);  
    this.is_staff = data.is_staff;
    this.usertype = data.usertype;
  }
  logout(){
    this._service.onLogout();
    this.route.navigate(['login']);
  }
}
