import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import { CommonService } from 'src/app/_helpers/common/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comm-mini-statement',
  templateUrl: './comm-mini-statement.component.html',
  styleUrls: ['./comm-mini-statement.component.css']
})
export class CommMiniStatementComponent implements OnInit { 
  userAutoComData: any;
  userKeyword = 'userdetails';
  prevVal: any;
  showData: boolean = false;
  data: any;
  val: any = '';
  public mainForm: FormGroup;
  userId: any;

  constructor(private fb: FormBuilder, private _auth: ApiService, private elementRef: ElementRef) {
    this.mainForm = new FormGroup({
      value: new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  get getVal() {
    return this.mainForm.controls['value'] as FormControl;
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
      formdata.append('type', '9');
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
    formdata.append('type', '9');
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
