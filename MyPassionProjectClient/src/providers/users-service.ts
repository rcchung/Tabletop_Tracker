import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsersService{
  public API = "http://localhost:8080";
  public USERS_API = this.API + "/users";
  userName: String;

  constructor(public http: HttpClient){
  }

  addUser(account): Observable<any>{
   this.setUser(account);
    return this.http.post(this.USERS_API,account);
  }

  setUser(account){
    this.userName = account.userName;
  }

  updateProfile(profile): Observable<any>{
    return this.http.put(this.USERS_API + "/1", profile);
  }

  getUserProfile(){
    return this.http.get(this.USERS_API+"/1")
  }
}