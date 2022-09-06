import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-website-settings',
  templateUrl: './website-settings.component.html',
  styleUrls: ['./website-settings.component.css']
})
export class WebsiteSettingsComponent implements OnInit {
  form:any=UntypedFormGroup;
  settings:any;
  portal_title:any;
  mob_no1:any;
  email1:any;
  marquee_content:any;
  footer_copyright:any;

  constructor(
    private api: ApiService,
    private auth: ApiService,
    private fb: UntypedFormBuilder, 
    private router:Router
    ) {
    this.form = this.fb.group({
      title     : [''], 
      copyrights : [''], 
      mobile : [''],
      email    : [''],
      marqueecontent  : ['']
    }); 
  }

  ngOnInit(): void {
    const formdata = new FormData();    
    this.api.postdata(formdata, config.getsettings).subscribe((res: any) => {
      console.log(res);
      this.settings = res.data;
      this.portal_title = res.data.portal_title;
      this.mob_no1 =res.data.mob_no1;
      this.email1=res.data.email1;
      this.marquee_content=res.data.marquee_content;
      this.footer_copyright=res.data.footer_copyright;
      
    })
  }

  onSubmit(){
    const formdata = new FormData();
    formdata.append('token', config.tokenauth);
    formdata.append('portal_title', (this.form.get('title').value =! '')?this.form.get('title').value:this.portal_title);
    formdata.append('footer_copyright', (this.form.get('copyrights').value !='')?this.form.get('copyrights').value:this.footer_copyright);
    formdata.append('mob_no1',(this.form.get('mobile').value !='')?this.form.get('mobile').value: this.mob_no1);
    formdata.append('email1', (this.form.get('email').value)?this.form.get('email').value:this.email1);
    formdata.append('marquee_content', (this.form.get('marqueecontent').value)?this.form.get('marqueecontent').value:this.marquee_content);
    this.api.postdata(formdata, config.Setting_update).subscribe((res: any) => {
      if (res.statuscode == 200) {
        Swal.fire({
          title: res.message,
          icon: 'success'
        }); 
      }else{
        Swal.fire({
          title: res.message,
          icon: 'error'
        });
      }
      
    })
  }
}
