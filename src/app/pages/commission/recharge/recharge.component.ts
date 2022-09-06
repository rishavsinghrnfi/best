import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  keyword = 'userdetails';
  userDtLst: any;
  data: any = null;
  callEvent: any;
  userId: any;
  filterDt: any = [];

  itemFilter: boolean = true;
  searchInp: string = '';
  constructor(private fb: UntypedFormBuilder, private _auth: ApiService) {

  }

  ngOnInit(): void {

  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 45 || charCode > 47)) {
      return false;
    }
    return true;

  }


  selectEvent(event: any) {
    // do something with selected item
    this.callEvent = event;

    if (event !== undefined) {
      this.itemFilter = true;
      this.searchInp = '';
      this.userId = event.id;
      let newArray: any = [];
      let formdata: any = new FormData();
      formdata.append('token', config.tokenauth);
      formdata.append('userid', this.userId);
      formdata.append('type', '4');
      formdata.append('usertype', event.usertype);
      this._auth.postdata(formdata, config.commission.getcommission).subscribe((res: any) => {
        if (res.statuscode === 200) {
          if (res.data) {
            this.data = res.data;
            this.filterDt = this.data;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'No record found, Please contact with tech team.',
            })
          }

        }
      });
    }
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    let formdata: any = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('Authkey', config.Authkey);
    formdata.append('search', val);
    this._auth.postdata(formdata, config.commission.userlist).subscribe((res: any) => {
      if (res['data'] == undefined) {
        this.userDtLst = [];
      } else {
        this.userDtLst = res['data'];
      }
    });
  }


  searchFilter(event: any) {
    this.itemFilter = false;
    let ftr = event.target.value.toLocaleLowerCase();


    this.filterDt = this.data.filter((boat: any) => {
      if (boat.name.toLocaleLowerCase().indexOf(ftr) !== -1) {
        boat['isShow'] = true;
      } else {
        boat['isShow'] = false;
      }
      return boat;
    });

  }

  onSubmit() {
    // console.log(this.filterDt);
    let item: any = {};
    this.filterDt.forEach((element: any) => {
      item[element.id] = element.value;
    });
    console.log(item);

    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('type', '4');
    formdata.append('userid', this.userId);
    formdata.append('commission', JSON.stringify(item));
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
