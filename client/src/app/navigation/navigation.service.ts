import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class NavigationService {

  public static MIN_WIDTH = 3;
  public static MAX_WIDTH = 17;
  public sidenavWidth = NavigationService.MAX_WIDTH;


  constructor(private http: HttpClient){

  }
}
