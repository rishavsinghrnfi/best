import { Component, ElementRef, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comm-lic-billpay',
  templateUrl: './comm-lic-billpay.component.html',
  styleUrls: ['./comm-lic-billpay.component.css']
})
export class CommLicBillpayComponent implements OnInit {
  userAutoComData: any;
  userKeyword = 'userdetails';
  prevVal: any;
  showData: boolean = false;
  data: any;
  val: any = '';
  public mainForm: UntypedFormGroup;
  userId: any;

  constructor(private fb: UntypedFormBuilder, private _auth: ApiService, private elementRef: ElementRef) {
    this.mainForm = new UntypedFormGroup({
      value: new UntypedFormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  get getVal() {
    return this.mainForm.controls['value'] as UntypedFormControl;
  }

  ngOnInit(): void {
  }

  getServerResponse(val: any) {
    if (val && val != this.prevVal) {
      this.prevVal = val;
      let formdata: any = new FormData();
      formdata.append('token', config.tokenauth);
      formdata.append('search', val);
      this._auth.postdata(formdata, config.commission.userlist).subscribe((res: any) => {
        if (res.statuscode == 200) {
          this.userAutoComData = res.data;
        } else {
          this.userAutoComData = [];
        }
      });
    }

  }
  searchCleared() {
    this.prevVal = null;
  }

  selectEvent(event: any) {    
    this.showData = false;
    if (event !== undefined) {
      this.userId = event.id;
      let formdata: any = new FormData();
      formdata.append('token', config.tokenauth);
      formdata.append('userid', this.userId);
      formdata.append('type', '13');
      this._auth.postdata(formdata, config.commission.getcommission).subscribe((res: any) => {
        if(res.statuscode == 200){
          this.showData = true;
          this.data = res.data.value;
          this.createForm(true);
        }else{
          Swal.fire({
            title: res.message,
            icon: 'error'
          });
        }
      });
    }
  }
  createForm(val: boolean) {

    if (val) {
      this.getVal.patchValue(this.data)
    } else {
      this.getVal.patchValue('')
    }
  }
  onSubmit() {
    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('type', '13');
    formdata.append('userid', this.userId);
    formdata.append('commission', JSON.stringify(this.mainForm.value));
    this._auth.postdata(formdata, config.commission.updatecommission).subscribe((res: any) => {
      if (res.statuscode === 200) {
        Swal.fire(
          'Commission Updated.',
          res.message,
          'success'
        )
      }
    });
  }

}
