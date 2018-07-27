import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GamesService{
  public API = "https://tabletoptracker.herokuapp.com";
  public GAMES_API = this.API + "/games";

  constructor(public http: HttpClient){
  }

  getAllGames(){
    return this.http.get(this.GAMES_API);
  }

  getGameById(id: String) {
      return this.http.get(this.GAMES_API+"/id/"+id)
  }

}