import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServceService {
 apiUrl : string = `http://localhost:3000/employees`;
  constructor(private _http : HttpClient) { }

  getAllData(){
     return  this._http.get(this.apiUrl);
  }

  delete(id:string){
    return this._http.delete(this.apiUrl + '/' + id )
  }


  getById(id:string){
    return this._http.get(this.apiUrl + '/' + id)
  }

  createPost(obj:any){
    return this._http.post(this.apiUrl , obj);
  }

};





















