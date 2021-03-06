import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { IStudent } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  @Input() data:IStudent;

  constructor(private ds : DataService, private router:Router) { }

  ngOnInit() {
  }

  @Output()
  deleteData: EventEmitter<IStudent> = new EventEmitter<IStudent>();

  remove(){
    this.deleteData.emit(this.data);
  }

  edit(){
    //this.router.navigate(['',this.data.id],{skipLocationChange: true});
    this.router.navigate(['edit',this.data.id]);
  }
}
