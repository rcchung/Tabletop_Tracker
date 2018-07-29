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
  public API = "https://tabletoptracker.herokuapp.com";
  public USERS_API = this.API + "/users";
  public user: User;
  public userId: any;

  constructor(public http: HttpClient){
  }

  addUser(account): Observable<any> {
     return this.http.post(this.USERS_API,account);
  }

  setUser(account){
    this.userId = account.id;
    this.user = account;
  }

  getUser() {
    return this.user;
  }

  updateProfile(profile): Observable<any>{
    return this.http.patch(this.USERS_API + "/" + this.userId, profile);
  }

  getUserProfile(): Observable<any>{
    return this.http.get(this.USERS_API+ "/id/" + this.userId);
  }

  getUserIdByUserName(userName:String){
    this.http.get(this.USERS_API + "/username/" + userName).subscribe(response => {
      this.userId = response;
      console.log("got user");
      console.log(response);
    })
  }
}