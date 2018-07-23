import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsersService{
  public API = "http://localhost:8080";
  public USERS_API = this.API + "/users";

  constructor(public http: HttpClient){
  }

  getUserById() {
      return this.http.get(this.USERS_API+"/1")
  }
}