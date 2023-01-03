import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstFormGroup, registerForm, secondFormGroup, thirdFormGroup } from './model/info';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";
  
  saveData(data:registerForm)
  {
    return this.http.post<registerForm>(this.url+"/data",data);
  }

  firstInfo(first:firstFormGroup){
   
    return this.http.post<firstFormGroup>(this.url+"/firstInfo", first);
  }

  secondInfo(first:secondFormGroup){
  
    return this.http.post<firstFormGroup>(this.url+"/secondInfo", first);
  }

  thirdInfo(first:thirdFormGroup){

    return this.http.post<thirdFormGroup>(this.url+"/thirdInfo", first);
  }


}
