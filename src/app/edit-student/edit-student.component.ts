import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service'
import { IStudent } from '../student';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id:number;
  editForm:FormGroup;


  constructor(private route: ActivatedRoute, private router:Router, private ds:DataService,private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    });
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
    this.ds.getItemsByID(this.id).subscribe(data => {
      this.editForm.setValue(data);});
  }

  onSubmit() {
    this.ds.updateItem(this.editForm.value)
      
      .subscribe(
        data => {
          this.router.navigate(['']);
        },
        error => {
          alert(error);
        });
  }

}
