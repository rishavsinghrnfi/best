import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import { CustomValidators } from 'src/app/_helpers/common/custom-validator/commission-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dmt',
  templateUrl: './dmt.component.html',
  styleUrls: ['./dmt.component.css']
})
export class DmtComponent implements OnInit {
  userAutoComData: any;
  userKeyword = 'userdetails';
  prevVal: any;

  val: any = '';
  userDetailsList: Array<Select2OptionData> = [];
  userDtLst: any;
  data: any;

  mainForm: FormGroup;
  formArr = new FormArray([]);
  userId: any;
  titkl = 100;

  testFm: FormGroup = new FormGroup({});

  testArr = new FormArray([]);
  list: any = [];
  showData: boolean = false;
  constructor(private _auth: ApiService) {
    this.mainForm = new FormGroup({
      'formArr': this.formArr
    });

    this.testFm = new FormGroup({
      'slotArr': this.testArr
    })



  }

  ngOnInit(): void {

    // this.getUserDetails();

    // this.createFm(this.obj);

  }

  createFm(obj: any) {
    this.testArr = new FormArray([]);

    this.testFm = new FormGroup({
      'slotArr': this.testArr
    })

    let max_Obj: any = {};
    for (const key in obj) {
      max_Obj['max_charges' + (+key + 1)] = obj[key]['max_charges'];
    }
    let num = 0;
    let additional = 0;
    for (const key in obj[0]) {
      let innerArr = new FormArray([]);


      let item: any = {};

      let slab = key == 'charges_imps' ? 100 : key == 'charges_imps1' ? 1001 : key == 'charges_imps2' ? 2001 : key == 'charges_imps3' ? 3001 : key == 'charges_imps4' ? 4001 : 0;
      let slabNum = 1;

      for (let index = 0; index < obj.length; index++) {

        if (key != 'max_charges' && key != 'slot') {
          let to = 0;
          let fo = 0;

          if (slabNum == 1 && key == 'charges_imps') {
            to = 100;
            fo = 1000;
            slab = 5001;
          } else {

            to = slab;
            slab = slab + 999;

            fo = slab;
            slab = slab + 4001;

          }
          const element = obj[index][key];

          innerArr.push(new FormGroup({
            'slab_title': new FormControl(to + ' to ' + fo),
            'slab_name': new FormControl(key),
            'slab_value': new FormControl(+element, [Validators.required, CustomValidators.validateCommMinAndMax()]),
          }))

          // item['slot' + '-' + index + '_' + key] = obj[index][key];
          item['slot' + '-' + index] = element;

          slabNum++;
        }

      }

      if (num != 0 && max_Obj['max_charges' + num]) {

        item['max_charges'] = max_Obj['max_charges' + num];
        this.list.push(item);
        additional = additional + 1000;
        innerArr.push(new FormGroup({
          'slab_title': new FormControl('Additional-' + additional),
          'slab_name': new FormControl('max_charges'),
          'slab_value': new FormControl(max_Obj['max_charges' + num], [Validators.required, CustomValidators.validateCommMinAndMax()]),
        }))

        this.testArr.push(new FormGroup({
          'slab_row_value': new FormControl(num),
          arr: innerArr
        }));
      }

      num++;
    }
  }


  get slotArrx() {
    return ((this.testFm as FormGroup).controls['slotArr'] as FormArray).controls;
  }

  getArrss(arr: any, i: any): any {
    return (<FormArray>arr.controls['arr']);
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
    // do something with selected item
    if (event !== undefined) {
      this.userId = event.id;
      // //console.log(this.userId);
      let newArray: any = [];
      let formdata: any = new FormData();
      formdata.append('token', config.tokenauth);
      formdata.append('userid', this.userId);
      formdata.append('type', '5');
      this._auth.postdata(formdata, config.commission.getcommission).subscribe((res: any) => {
        if (res.statuscode == 200) {
          this.createFm(res.data);
          this.showData = true;
        } else {
          Swal.fire({
            title: res.message,
            icon: 'error'
          });
        }
      });


    }
  }

  getUserDetails() {
    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('search', this.val);
    this._auth.postdata(formdata, config.commission.userlist).subscribe((res: any) => {
      if (res.statuscode == 200) {
        let arr = [];
        for (var v of res.data) {
          if (v.userdetails != null)
            arr.push({ id: v.id, text: v.userdetails });
        }
        this.userDetailsList = arr;
      }
    });
  }

  onSubmit() {

    let formVal = this.testFm.value['slotArr'];

    let obj: any = [];

    formVal.map((ele: any, index: any) => {
      let slotObj: any = {
        "slot": ele['slab_row_value'],
      }
      formVal.map((innerele: any, ind: any) => {
        slotObj[innerele['arr'][index]['slab_name']] = innerele['arr'][index]['slab_value'];
      });
      slotObj['max_charges'] = ele['arr'][5]['slab_value'];
      obj.push(slotObj);
    });
    
    console.log(obj);

    // return null;
    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('type', '5');
    formdata.append('userid', this.userId);
    formdata.append('commission', JSON.stringify(obj));
    this._auth.postdata(formdata, config.commission.updatecommission).subscribe((res: any) => {
      //console.log(res.data);
      if (res.statuscode === 200) {
        Swal.fire(
          'Commission Updated.',
          res.message,
          'success'
        )
      }else{
        Swal.fire( 
          res.message,
          'error'
        )
      }
    });
  }

}
