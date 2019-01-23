import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { DataService } from '../data.service';
import { IStudent } from '../student';
import {first} from "rxjs/operators";
import {Router, Data} from "@angular/router";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: DataService) {
    this.router.events.subscribe(()=> 
    {
      let root = this.router.routerState.snapshot.root;
      while(root){
        if(root.children && root.children.length)
          root = root.children[0];
        else if(root.data && root.data["title"]){
          console.log(root.data["title"]);
          return;
        }
        else{
          return;
        }
      }
    })
   }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });

  }

  onSubmit() {
    this.userService.createItem(this.addForm.value)
      .subscribe( data => {
        this.router.navigateByUrl('');
      });
  }
}
