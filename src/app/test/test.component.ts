import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor( private _cookie:CookieService, private _session:SessionStorageService, private _local:LocalStorageService) { 
    
  }

  ngOnInit() {
  }

  setCookies(){
    this._cookie.put("test","1");
  }

  getCookies(){
    alert(this._cookie.get("test"));
  }

  removeCookies(){
    this._cookie.remove("test");
  }

  setLocalStorages(){
    this._local.store("test","1");
  }

  getLocalStorage(){
    alert(this._local.retrieve("test"));
  }

  removeLocalStorage(){
    this._local.clear("test");
  }

  setSessionStorage(){
    this._session.store("test","1");
  }

  getSessionStorage(){
    alert(this._session.retrieve("test"));
  }

  removeSessionStorage(){
    this._session.clear("test");
  }

  games = [
    {
      "id":"1",
      "name": "DOTA 2",
      "genre": "Strategy"
    },
    {
      "id":"2",
      "name": "AOE 3",
      "genre": "Strategy"
    },
    {
      "id":"3",
      "name": "GTA 5",
      "genre": "RPG"
    },
    {
      "id":"4",
      "name": "Far Cry 3",
      "genre": "Action"
    },
    {
      "id":"5",
      "name": "GTA San Andreas",
      "genre": "RPG"
    },
    {
      "id":"6",
      "name": "Hitman",
      "genre": "Action"
    },
    {
      "id":"7",
      "name": "NFS MW",
      "genre": "Sport"
    },{
      "id":"8",
      "name": "Fifa 16",
      "genre": "Sport"
    },{
      "id":"9",
      "name": "NFS Sen 2",
      "genre": "Sport"
    },{
      "id":"10",
      "name": "Witcher Assassins on King",
      "genre": "Adventure"
    }
  ];

  //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}
