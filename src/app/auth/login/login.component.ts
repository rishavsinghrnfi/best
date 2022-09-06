import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import { EncodeDecode } from 'src/app/_helpers/encode-decode';
import Swal from 'sweetalert2';
import { ConnectionService } from 'ng-connection-service';
import { CustomModelComponent } from 'src/app/_helpers/custom-model/custom-model.component';
import { UserLoginDtlService } from 'src/app/service/user-login-dtl.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild(CustomModelComponent) model!: CustomModelComponent;

  heading: string = '';
  desc: string = '';
  logo: string = '';

  timeLeft: number = 60;
  maxlength: any;
  totxt: any;
  alert: boolean = false;
  loading = true;
  error = '';
  message = '';
  submitted = false;
  logindata: any = UntypedFormBuilder;
  title = '';
  longitute: string = '';
  latitute: string = '';
  isSubmitted: boolean = false;
  myDate:any;
  date:any
  checkPassword: any = {
    username: '',
    password: ''
  };
  status = 'ONLINE'; //initializing as online by default
  isConnected = true;
  constructor(
    private route: Router,
    private fb: UntypedFormBuilder,
    private _auth: ApiService,
    private connectionService: ConnectionService,
    private _UserLoginDtlService: UserLoginDtlService,
    private datepipe:DatePipe
  ) {
    this.logindata = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      isagreed: ['1', [Validators.required]]
    });

  }

  ngOnInit(): void {
    // this._auth.validDomian((domainSettings: any) => {
    //   this.heading = domainSettings.heading;
    //   this.title = domainSettings.heading;
    //   this.desc = domainSettings.desc;
    //   this.logo = domainSettings.logo;
    // });
    // setTimeout(() => {
    //   this.myDate =  this.getDate();
    //  }, 1000);
    //  setInterval(() =>{
    //    const currentDate = new Date();
    //    this.date = currentDate.toLocaleTimeString();
    //     }, 1000);

    this.getLocation();

    this._auth.isLoggedIn();
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        Swal.fire({
          title: 'You Are Online!!',
          icon: 'success'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Check Internet Connection! No Internet',
        })
      }
    });
  }
  getDate(){
    return this.datepipe.transform(new Date(), 'MMM d, y');
  }
  login() {
    if (!this.logindata.valid) {
      return;
    } else {
      // console.log([this.latitute,this.longitute]);
      if (this.latitute == "" && this.longitute == "") {
        Swal.fire({
          icon: 'error',
          title: 'Please allow the Location access! and You May Not Connected To Internet',
        })
      } else {
        this.submitted = true; 
        const formdata = new FormData();
        formdata.append('username', this.logindata.get('username').value);
        formdata.append('password', this.logindata.get('password').value); 
        formdata.append('latitude', this.latitute);
        formdata.append('longitude', this.longitute);

        
        this._auth.postdata(formdata, config.login).subscribe((res: any) => {
          if (res.response == 2001) {
            if (res.firstlogin == 0) {
              // let decode: any = EncodeDecode(JSON.stringify(res), 'n');
              // localStorage.setItem('LoginDetails', decode);
              this._UserLoginDtlService.setUserLoginDtl_Fn(res);
              this.route.navigate(['change-password']);
            }
            }else if(res.response == 2002){
                if (res.twostep == 1) {
                  this.model.showModal = true;
                  this.logindata.disable()
                } 
            }else if (res.response == 200) { 
              // let decode: any = EncodeDecode(JSON.stringify(res), 'n');
              // localStorage.setItem('LoginDetails', decode);
              this._UserLoginDtlService.setUserLoginDtl_Fn(res);
              this.route.navigate(['dashboard']);
            } else if (res.response == 404) {
              Swal.fire({
                icon: 'error',
                title: res.message
              })
            } 
        }
        )
      }
    }

  }
  getLocation() {
    this._auth.getLocationService().then(resp => {
      this.longitute = resp.lng;
      this.latitute = resp.lat;

    })
  }
  /* forgot_pwd() {
    this.route.navigate(['forgot-password']);
  } */
  moveFocus() {
    const otpList = this.model.getOtp();
    if (otpList.length == 6) {
      const formdata = new FormData();
      formdata.append('username', this.logindata.get('username').value);
      formdata.append('password', this.logindata.get('password').value);
      // formdata.append('token', config.tokenauth);
      // formdata.append('latitude', this.latitute);
      // formdata.append('longitude', this.longitute);
      formdata.append('otp', otpList);
      this._auth.postdata(formdata, config.verify).subscribe((res: any) => {
        if (res.response == 200) {
          // let decode: any = EncodeDecode(JSON.stringify(res), 'n');
          // localStorage.setItem('LoginDetails', decode);
          this._UserLoginDtlService.setUserLoginDtl_Fn(res);
          this.route.navigate(['dashboard']);
        } else {
          Swal.fire(res.message)
        }
      })
    }
  }

  resend_otp() {
    if (this.latitute == "" && this.longitute == "") {
      Swal.fire({
        title: 'Please allow the Location access!',
        icon: 'error'
      });
    } else {
      const formdata = new FormData();
      formdata.append('username', 'SUPERADMIN');
      formdata.append('password', 'SUPERADMIN');
      formdata.append('token', config.tokenauth);
      formdata.append('latitude', this.latitute);
      formdata.append('longitude', this.longitute);
      this._auth.postdata(formdata, config.resendotp).subscribe((res: any) => {
        if (res.response == 200) {
          Swal.fire({
            icon: 'error',
            title: res.message
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message
          })
        }
      }
      )
    }
  }


  get f() { return this.logindata.controls; }

}
