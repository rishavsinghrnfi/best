import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiService } from 'src/app/service/api.service';
import { config } from 'src/app/service/config';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  form: any = FormGroup;
  isEdit: boolean = false;
  editID: any = null; 

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '150px',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      }, 
    ],
    sanitize: true ,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  constructor(
    private auth: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router:Router
    ) {
    this.form = this.fb.group({
      content : [''],
      // content_en:['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (typeof params['id'] != 'undefined') {
        this.editID = params['id'];
        this.isEdit = true;
        const formdata = new FormData();
        formdata.append('token', config.tokenauth);
        formdata.append('id', this.editID);
        this.auth.postdata(formdata, config.notification.get).subscribe((res: any) => {
          if (res.statuscode == 200) { 
            console.log(res.data[0].content);
              this.form.patchValue({
                content:res.data[0].content,
                // content_en:res.data[0].content_en,
              });
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
      formdata.append('content', this.form.get('content').value);
      // formdata.append('content_en', this.form.get('content_en').value); 
      if(this.isEdit == true){
      formdata.append('id', this.editID);
        url = config.notification.update;
      }else{
        url = config.notification.create;
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
