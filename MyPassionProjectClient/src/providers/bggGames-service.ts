import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BggGameSearch{
  public API = "https://bgg-json.azurewebsites.net/thing/";

  constructor(public http: HttpClient){
  }

  searchGame(gameId: String){
    return this.http.get(this.API+gameId);
  }
}