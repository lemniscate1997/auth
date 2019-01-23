import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IStudent } from '../student';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
    listData : IStudent[];
  constructor(private data:DataService, private router:Router, private toastr: ToastrService) {
 }

  deleteStudent(stud:IStudent):void{
    this.data.deleteItems(stud.id).subscribe((listStudent)=>{
      this.listData=this.listData.filter((x)=>x!==stud);
    });
  }

  newStud(){
    this.router.navigateByUrl('newstud');
  }

  ngOnInit() {
    this.data.getItems().subscribe((listStudent)=>this.listData=listStudent);

    console.log(this.listData);

  }

}
