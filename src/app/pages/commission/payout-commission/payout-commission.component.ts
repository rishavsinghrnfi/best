import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import { CustomValidators } from 'src/app/_helpers/common/custom-validator/commission-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payout-commission',
  templateUrl: './payout-commission.component.html',
  styleUrls: ['./payout-commission.component.css']
})
export class PayoutCommissionComponent implements OnInit {
  keyword = 'userdetails';
  userDtLst: any;
  data: any;
  dataslab:any = {};
  public aepsData: FormGroup;
  formArr = new FormArray([]);
  userId: any;
  showComm:boolean = false;
  minAmount: number = 0;
  maxAmount: number = 0;

  constructor(private fb: FormBuilder, private _auth: ApiService, private elementRef: ElementRef) {
    this.aepsData = this.fb.group({
      mainGroup: this.formArr,
    });
  }

  get mainStart() {
    return (((this.aepsData as FormGroup).controls['mainGroup'] as FormArray));
  }

  ngOnInit(): void {
  }


  selectEvent(event: any) {
    this.formArr = new FormArray([]);
    this.aepsData = this.fb.group({
      mainGroup: this.formArr,
    });

    if (event !== undefined) {
      this.userId = event.id;
      // //console.log(this.userId);
      let newArray: any = [];
      let formdata: any = new FormData();
      formdata.append('token', config.tokenauth);
      formdata.append('userid', this.userId);
      formdata.append('type', '14');
      this._auth.postdata(formdata, config.commission.getcommission).subscribe((res: any) => {
        if (res.statuscode == 200) {
          this.minAmount = res.min_value;
          this.maxAmount = res.max_value;
          this.showComm = true;

          if(res.data){
            // let newObject: any = {};
            // for (const newobj in res.data) {
            //   newObject = res.data[newobj];
            //   this.dataslab = {
            //     "icici": [newObject]
            //   };
            // }
            // console.log(res.data);
            
            this.dataslab = {
              "icici": res.data
            };

          }else{
            this.dataslab = {
              "icici": [
                {
                  "slab_min": "100",
                  "slab_max": "200000",
                  "is_fixed": "0",
                  "value": "0"
                }
              ]
            };
          }
           this.createForm(this.dataslab);
          // console.log(this.dataslab);
          
        } else {
          this.showComm = false;
          Swal.fire({
            title: res.message,
            icon: 'error'
          });
        }
      });
    }
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
  createForm(data: any) {

    for (const key in data) {
      let innerFormArr = new FormArray([], { validators: [CustomValidators.compairRecordValidator(), CustomValidators.firstRowMinpay(this.minAmount), CustomValidators.lastRowMaxpay(this.maxAmount)] });
      this.data = data[key].forEach((element: any) => {
        innerFormArr.push(new FormGroup({
          'slab_min': new FormControl(element.slab_min, [Validators.required]),
          'slab_max': new FormControl(element.slab_max, [Validators.required]),
          'value': new FormControl(element.value, [Validators.required, Validators.min(0)]),
          'is_fixed': new FormControl(element.is_fixed === '0' ? false : true, [Validators.required]),
        }, { validators: [CustomValidators.validateMinAndMax('slab_min', 'slab_max'), CustomValidators.is_fixedValue()] }));
      });
      this.formArr.push(new FormGroup({
        id: new FormControl(key, [Validators.required]),
        validCheck: new FormControl(false, [Validators.required]),
        arr: innerFormArr
      }));
    }
  }

  onSubmit() {
    let value = this.formArr.value;
    let obj: any = {};
    console.log(value);
    var rv: any = {};
    let mapped = value.map((m: any) => {
      rv[m.id] = m.arr
      // return { [m.id]: m.arr }
    });

    for (const key in rv) {
      const element = rv[key];
      rv = element;
      console.log(rv);
      
      
      // console.log(JSON.stringify(element));
      // let newObjectt: any = {};
      // for (const newobjj in element) {
      //   newObjectt = element[newobjj];
      //    console.log(newObjectt);
      // }

      for (const keys in element) {
        const ele = element[keys];
        if (typeof ele.is_fixed === 'boolean') {
          ele.is_fixed = ele.is_fixed === true ? '1' : '0';
        }
      }
    }    
   
    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('type', '14');
    formdata.append('userid', this.userId);
    formdata.append('commission', JSON.stringify(rv));
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

  getArr(arr: any, i: any): any {
    return (<FormArray>arr.controls['arr'])
  }

  add(pm: any, i: any) {
    // //console.log(this.getArr(pm, i).value);
    let leng: number = pm.controls['arr'].controls.length;

    let val: number = +((pm.controls['arr'] as FormArray)?.controls[leng - 1] as FormGroup)?.controls['slab_max']?.value;
    //console.log(val);

    let newUsergroup: FormGroup = this.fb.group({
      slab_min: [val + 1, [Validators.required]],
      slab_max: [null, [Validators.required]],
      value: [0, Validators.required],
      is_fixed: [false, Validators.required]
    }, { validators: [CustomValidators.validateMinAndMax('slab_min', 'slab_max')] });
    this.getArr(pm, i).push(newUsergroup);
  }
  remove(pm: any, i: any, j: any) {
    this.getArr(pm, i).removeAt(j);
  }

  isAddBtnDisabled(arr: any, i: any) {
    let leng: number = arr.controls['arr'].controls.length;

    let val: number = +((arr.controls['arr'] as FormArray)?.controls[leng - 1] as FormGroup)?.controls['slab_max']?.value;

    if (val >= 200000) {
      return true;
    }
    return null;
  }

}
