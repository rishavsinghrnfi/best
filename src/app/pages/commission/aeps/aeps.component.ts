import { Component, ElementRef, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import { CustomValidators } from 'src/app/_helpers/common/custom-validator/commission-validator';
import { EncodeDecode } from 'src/app/_helpers/encode-decode';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aeps',
  templateUrl: './aeps.component.html',
  styleUrls: ['./aeps.component.css']
})
export class AepsComponent implements OnInit {
  userAutoComData: any;
  userKeyword = 'userdetails';
  prevVal: any;
  dataLength: any;
  dataupdate: any;

  data: any = [];
  val: any = '';

  Form: UntypedFormGroup;

  formArr = new UntypedFormArray([]);
  userId: any;

  constructor(private fb: UntypedFormBuilder, private _auth: ApiService, private elementRef: ElementRef) {
    this.Form = this.fb.group({
      slabAmount: this.formArr
    });
  }

  get formAr() {
    return ((this.Form as UntypedFormGroup).get('slabAmount') as UntypedFormArray).controls;
  }

  getCustGroup(i: any): any {
    console.log(i);

    // console.log(((this.Form as FormGroup).get('slabAmount') as FormArray).controls[i]);

    return ((this.Form as UntypedFormGroup).get('slabAmount') as UntypedFormArray);
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

    if (event !== undefined) {
      
      this.userId = event.id;
      let formdata: any = new FormData();
      formdata.append('token', config.tokenauth);
      formdata.append('userid', this.userId);
      formdata.append('type', '8');
      this._auth.postdata(formdata, config.commission.getcommission).subscribe((res: any) => {
        if (res.statuscode == 200) {
          // this.data = res.data;
          this.dataLength = res.data.length;

          this.createForm(res.data);
        } else {
          Swal.fire({
            title: res.message,
            icon: 'error'
          });
        }
      });
    }
  }
  createForm(data: any) {
    // console.log(data);
    this.formArr = new UntypedFormArray([]);
    this.Form = this.fb.group({
      slabAmount: this.formArr
    });
    this.data = data.forEach((element: any) => {
      this.formArr.push(new UntypedFormGroup({
        'label': new UntypedFormControl(element.label),
        'value': new UntypedFormControl(element.value, [Validators.required, Validators.min(0), CustomValidators.enter_OnlyNumber_OnlyFloatTrue_Both()]),
        'slot': new UntypedFormControl(element.slot),
      }));
    });
  }

  onSubmit() {
    console.log(this.Form.value);

    //console.log(this.formArr.controls);
    let value = this.Form.value;

    for (const key in value) {
      const element = value[key];
      this.dataupdate = JSON.stringify(element);
    }
    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('type', '8');
    formdata.append('userid', this.userId);
    formdata.append('commission', this.dataupdate);
    this._auth.postdata(formdata, config.commission.updatecommission).subscribe((res: any) => {
      if (res.statuscode == 200) {
        Swal.fire({
          title: res.message,
          icon: 'success'
        });
      } else {
        Swal.fire({
          title: res.message,
          icon: 'error'
        });
      }
    });
  }



  getArr(arr: any, i: any): any {
    return (<UntypedFormArray>arr.controls['arr'])
  }

  add(pm: any, i: any) {
    // //console.log(this.getArr(pm, i).value);
    let leng: number = pm.controls['arr'].controls.length;

    let val: number = +((pm.controls['arr'] as UntypedFormArray)?.controls[leng - 1] as UntypedFormGroup)?.controls['slab_max']?.value;
    //console.log(val);

    let newUsergroup: UntypedFormGroup = this.fb.group({
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

    let val: number = +((arr.controls['arr'] as UntypedFormArray)?.controls[leng - 1] as UntypedFormGroup)?.controls['slab_max']?.value;

    if (val >= 10000) {
      return true;
    }
    return null;
  }
}
