import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
  showRemark:any;
  form: any = UntypedFormGroup;
  isEdit: boolean = false;
  editID: any = null;
  constructor(
    private auth: ApiService,
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router:Router
    ) {
    this.form = this.fb.group({
      name     : ['',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]], 
      username : ['',[Validators.required, Validators.pattern('[-_a-zA-Z0-9]*')]], 
      firmname : ['', [Validators.required]],
      email    : ['',[Validators.required,Validators.email]],
      phone    : ['', [Validators.required, Validators.pattern('[6789][0-9]{9}'), Validators.maxLength(10)]],
      status   : ['',[Validators.required]],
      remarks  : [''],
    }); 
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (typeof params['id'] != 'undefined') {
        this.editID = params['id'];
        this.isEdit = true;
        const formdata = new FormData();
        formdata.append('token', config.tokenauth);
        formdata.append('userid', this.editID);
        this.auth.postdata(formdata, config.account.staff.get).subscribe((res: any) => {
          if (res.statuscode == 200) { 
              this.form.patchValue({
                name:res.data.name,
                username:res.data.username,
                firmname:res.data.firmname,
                email:res.data.email,
                phone:res.data.phone,
                // status:res.data.status,
                // showRemark:res.data.remarks
              });
              this.showRemark = res.data.remarks;
              console.log(this.showRemark)
              this.form.controls['username'].disable();
          }else{
            Swal.fire({
              title: res.message,
              icon: 'error'
            });
          }
        });
      }
    }); 
  }

  onSubmit(){
    if(!this.form.valid){
      return;
    }else{
      let url;
      const formdata = new FormData();
      formdata.append('token', config.tokenauth);
      formdata.append('name', this.form.get('name').value);
      formdata.append('firmname', this.form.get('firmname').value);
      formdata.append('email', this.form.get('email').value);
      formdata.append('phone', this.form.get('phone').value);
      formdata.append('status', this.form.get('status').value);
      if(this.isEdit == true){
        formdata.append('remarks', this.form.get('remarks').value);
        formdata.append('userid', this.editID);
        url = config.account.staff.update;
      }else{
        formdata.append('username', this.form.get('username').value);
        url = config.account.staff.create;
      }
      this.auth.postdata(formdata, url).subscribe((res: any) => {
        if (res.statuscode == 200) {
          Swal.fire({
            title: res.message,
            icon: 'success'
          });
          if(this.isEdit == false){
          this.form.reset();
          // this.router.navigate(['account/admin/list']);
          }
        }else{
          Swal.fire({
            title: res.message,
            icon: 'error'
          });
        }
      });
    }
  }
  get f() { return this.form.controls; }
}
