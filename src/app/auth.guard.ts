import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private router:Router, private ds:DataService){ }

  canActivate():boolean{
    if(this.ds.getToken()){
      return true;
    }
    else{
      window.alert("login first!!!!");
      this.router.navigate(['dd'])
      return false;
    }
  }
}
