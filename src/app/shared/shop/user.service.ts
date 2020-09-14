import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client:HttpClient) { }
   
  getUser(): any{
    return this.client.get('http://localhost:3100/user');
    //console.log(data);
    
  }

}
