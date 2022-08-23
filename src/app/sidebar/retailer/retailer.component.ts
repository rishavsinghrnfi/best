import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import { EncodeDecode } from 'src/app/_helpers/encode-decode';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {
  permission: any = [];
  constructor(private api:ApiService,private route:Router) { }

  ngOnInit(): void {
    let decode: any = EncodeDecode('n', localStorage.getItem('LoginDetails'));
    let data: any = JSON.parse(decode);  
    // this.permission = this._changeDetail(data.permission);   
    this.getuserdata();
  }

  _changeDetail(obj:any){
    const res:any = {}
    for (const key in obj) {
      const parsed = parseInt(obj[key], 10);
      res[key] = isNaN(parsed) ? obj[key] : parsed;
    }
    return res;
  }

  getuserdata(){ 
    const formdata = new FormData();
    formdata.append('token', config.tokenauth); 
    this.api.postdata(formdata, config.getsingleuser).subscribe((res: any) => {  
      this.permission = res.data;   
    })
  }
  createPan() {
    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    this.api.postdata(formdata, config.pan.genrateUrl).subscribe((res: any) => {
      if (res.status) {
        this.openWindow(res);
      }else{
        Swal.fire({
          icon: 'error',
          title: res.message
        });
      }
    })
  }
  openWindow(res: any) {
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", res.data.url);
    let element1: any = document.createElement("INPUT");
    element1.name = "encdata"
    element1.value = res.data.encdata;
    element1.type = 'hidden'
    form.appendChild(element1);
    let newwindow: any = window.open('', 'name', 'width=800,height=600');
    function popitup() {
      newwindow.document.body.appendChild(form);
      newwindow.document.forms[0].submit();
      return false;
    }
    popitup();
  }
}
