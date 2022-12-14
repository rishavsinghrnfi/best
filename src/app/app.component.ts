import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ApiService } from './service/api.service';
import * as $ from 'jquery';
import { config } from './service/config';
declare function mySideBarInitFn(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  checkLogin: any = false;
  title = 'API Portal'; 
  name = "";
  paramnew: any = '';
  showLoadeer: boolean = false;
  changeColor: any;
  constructor(
    private api: ApiService,
    private router: Router
  ) {
    let count = 0;
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] === '/login' ||
          event['url'] === '/forgot-password' ||
          event['url'] === '/change-password' ||
          event['url'] === '/gateway-pg-response' ||
          event['url'] === '/signup') {
          this.checkLogin = false;
          count = 0; 
        } else {
          this.checkLogin = true;
          if (count === 0) {
            setTimeout(() => {
              mySideBarInitFn();
            }, 1);
            count++;
          }
          //console.log(this.checkLogin);
        }
      }
    })
    $('body').addClass('themecolor4');
  }
  ngOnInit() { 
    
    // console.log(domainData+'vvvv');


  }

  change(val: any) {
    console.log(val);

    $('body').removeAttr('class');
    $('body').addClass(val);

  }

  getsetting(){
    const formdata = new FormData();  
    //this.loading = true;
    this.api.postdata(formdata, config.getsettings).subscribe((res: any) => {
      console.log(res);
      
    })
  }
}
