import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchText:any;
  constructor(private http : HttpClient) { }
  getEmploye(){
    return this.http.get<any>("http://localhost:3000/Jobs")
    .pipe(map((res:any)=>{
      return res;
    }))
   }
}
