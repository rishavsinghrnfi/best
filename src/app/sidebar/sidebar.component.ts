import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyTxtRecord } from 'dns';
import { ApiService } from '../service/api.service';
import { config } from '../service/config';
import { EncodeDecode } from '../_helpers/encode-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loginDetails: any;
  icon: any;
  usertype: any;
  name: any;
  username: any;
  firmname: any;
  marquee_content:any;
  constructor(
    private auth: ApiService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getverifyDetails();
    this.loginDetails = this.auth.Getsessiondata();

    this.auth.validDomian((domainSettings: any) => {
      this.icon = domainSettings.icon; 
      
    });

    const formdata = new FormData();    
    this.auth.postdata(formdata, config.getsettings).subscribe((res: any) => { 
      this.marquee_content=res.data.marquee_content;  
    })
  }

  getverifyDetails() {
    if (typeof (localStorage.getItem('LoginDetails')) !== 'undefined' && localStorage.getItem('LoginDetails') !== '') {
      let decode: any = EncodeDecode('n', localStorage.getItem('LoginDetails'));
      let data: any = JSON.parse(decode);
      this.username = data.username;
      this.name = data.name;
      console.log(data);

      this.usertype = data.usertype;
    } else {
      this.route.navigate(['login']);
    }
  }

}
