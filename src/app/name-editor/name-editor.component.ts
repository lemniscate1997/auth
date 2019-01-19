import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  constructor() { }
  value='';
  ngOnInit() {
  }
  onKeyUp(val){this.value = val;}
  updateName(){
    this.name.setValue('Name ');
  }
}
