import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = ''
  private clientsecret ='d855d4c4a5f258538f4b9509f3cf3e90440ffba'
  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'fattym';
  }
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +    this.clientid +
        "&client_secret=" +
        this.clientsecret
    )
    .pipe(map(res => res));;
  }
  getProfileRepos(){
    	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" +    this.clientid +
        "&client_secret=" +
        this.clientsecret
    )
    .pipe(map(res => res));

  }
  updateProfile(username:string){
  	this.username = username;
  }
}