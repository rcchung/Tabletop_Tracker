import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export class User {
  id:number;
  profileName:String;
  userName:String;
  summary:String;

  constructor(id:number, profileName:String, userName:String, summary:String){
    this.id = id;
    this.profileName = profileName;
    this.userName = userName;
    this.summary = summary;
  }
}

@Injectable()
export class UsersService{
  public API = "http://localhost:8080";
  public USERS_API = this.API + "/users";
  public user: User;
  public userId: number;

  constructor(public http: HttpClient){
  }

  addUser(account): Observable<any> {
     return this.http.post(this.USERS_API,account);
  }

  setUser(account){
    console.log("setuser");
    console.log(account);
    this.userId = account.id;
    this.user = account;
    console.log("this id");
    console.log(this.userId);
    console.log(this.user);
    console.log("why does this work?")
  }

  getUser() {
    return this.user;
  }

  updateProfile(profile): Observable<any>{
    return this.http.patch(this.USERS_API + "/" + this.userId, profile);
  }

  getUserProfile(){
    console.log("getprofile");
    console.log(this.userId);
    return this.http.get(this.USERS_API+ "/" + this.userId);
  }
}