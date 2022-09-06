import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import { CommonService } from 'src/app/_helpers/common/common.service';
import { CustomValidators } from 'src/app/_helpers/common/custom-validator/commission-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pg',
  templateUrl: './pg.component.html',
  styleUrls: ['./pg.component.css']
})
export class PgComponent implements OnInit {
  keyword = 'userdetails';
  userDtLst: any;
  data: any;

  showData: boolean = false;

  userId: any;

  mainForm: UntypedFormGroup;
  paymentTypeLst: any;


  constructor(private fb: UntypedFormBuilder, private _auth: ApiService, private _CommonService: CommonService) {
    this.mainForm = this.fb.group({
      mainArr: new UntypedFormArray([])
    });
  }
  get getMainArr() {
    return ((this.mainForm as UntypedFormGroup).controls['mainArr'] as UntypedFormArray)
  }

  getArr(arr: any, i: any): any {
    return (<UntypedFormArray>arr.controls['arr'])
  }

  ngOnInit(): void {
    this.paymentTypeLst = this._CommonService.getPaymentType();
  }

  onChangeSearch(val: string) {
    let formdata: any = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('search', val);
    this._auth.postdata(formdata, config.commission.userlist).subscribe((res: any) => {
      if (res.statuscode == 200) {
        this.userDtLst = res.data;
      } else {
        this.userDtLst = [];
      }
    });
  }

  selectEvent(event: any) {
    if (event !== undefined) {
      this.userId = event.id;
      let formdata: any = new FormData();
      formdata.append('token', config.tokenauth);
      formdata.append('userid', this.userId);
      formdata.append('type', '10');
      this._auth.postdata(formdata, config.commission.getcommission).subscribe((res: any) => {
        if(res.statuscode == 200){
          this.data = res.data;
          this.createIC(true);
          this.showData = true;
        }else{
          this.createIC(false);
          Swal.fire({
            title: res.message,
            icon: 'error'
          });
        }
      });
    }
  }

  createIC(valType: boolean) {
    this.getMainArr.clear();

    let noDataObj: any = {
      "RAZOR": {
        "DC": '',
        "CC": '',
        "NB": ''
      },
      "CASHFREE": {
        "DC": '',
        "CC": '',
        "NB": ''
      }
    };
    let noData: any = {
      "RAZOR": this.data
    };

    // let mainObj = valType === true ? this.data : noDataObj;
    // let mainObj = this.data;
    console.log(noData);

    for (const iterat in noData) {
      let ele = noData[iterat];  
     
        let newUsergroup: UntypedFormArray = this.fb.array([]);
        let mainUsergroup: UntypedFormGroup = this.fb.group({
          name: [iterat],
          arr: newUsergroup
        });
        for (const key in ele) {
          const element = ele[key];        
          newUsergroup.push(this.fb.group({
            name: [key, []],
            value: [element, [Validators.required, Validators.min(0)]],
          }));
  
        }
        this.getMainArr.push(mainUsergroup)
      

    }

  }

  getPayType(val: any) {

    let tp = [];
    tp = this._CommonService.getPaymentType();

    let sd: any = tp.find(f => f.name == val);
    // //console.log(sd);
    return sd.value;
  }

  onSubmit() {
    // //console.log(this.getMainArr);
    // console.log(this.getMainArr.value);
    let formVal: any = this.getMainArr.value;
    let obj: any = {};

    formVal.map((val: any) => {
      let objDt: any = {};

      val.arr.map((m: any) => {
        objDt[m.name] = m.value
      })
      obj[val.name] = objDt;
    })
    let newObject: any = {};
    for (const newobj in obj) {
      newObject = obj[newobj];
    }

    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('type', '10');
    formdata.append('userid', this.userId);
    formdata.append('commission', JSON.stringify(newObject));
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
