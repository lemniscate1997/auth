import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IStudent } from './student';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor( private _http : HttpClient) { }
  /*
  getItems(){
    return this.dataItem;
    //return this.dataItem.filter(k=>k.id%2==0);
  }
  */
  url:string =  " http://localhost:3000/student";
  getItems () : Observable<IStudent[]> {
    return this._http.get<IStudent[]>(this.url);
  }

  getItemsByID (id:number) : Observable<IStudent[]> {
    return this._http.get<IStudent[]>(`${this.url}/${id}`);
  }

  deleteItems(id:string) : Observable<void> {
    return this._http.delete<void>(`${this.url}/${id}`);
  }

  createItem(item:IStudent) : Observable<void>{
    return this._http.post<void>(this.url, item);
  }

  updateItem(item:IStudent) {
    return this._http.put(this.url + '/' + item.id, item);
  }

  getToken(){
    return !!localStorage.getItem("user");
  }
}
