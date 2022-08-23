import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/service/config';

@Component({
  selector: 'app-list-supdistributor',
  templateUrl: './list-supdistributor.component.html',
  styleUrls: ['./list-supdistributor.component.css']
})
export class ListSupdistributorComponent implements OnInit {
  url: string = config.account.supdistributor.list; 
  
  columns: any = [ 
    {
      title: 'Username',
      data: 'username'
    },
    {
      title: 'Name',
      data: 'name'
    },
    {
      title: 'Email',
      data: 'email'
    },
    {
      title: 'Phone no',
      data: 'phone'
    },
    {
      title: 'Firm name',
      data: 'firmname'
    }, 
    {
      title: "Date",
      data: 'addeddate',
      pipe:'date'
    },
    {
      title: "Status",
      data: 'status', 
    },
    {
      title: "Action",
      data: 'id',
      pipe: function (obj:any) {
        return "<a routerLink='/account/super-distributor/update/"+obj.id+"' class='btn btn-primary'>Edit</a>";
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
 
}
