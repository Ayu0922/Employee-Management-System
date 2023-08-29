import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  searchText:any;

  constructor(private http : HttpClient) {
   
   }

   postEmploye(data:any){
    return this.http.post<any>("http://localhost:3000/Salary",data)
    .pipe(map((res:any)=>{
      return res;
    }))
   }


   getEmploye(){
    return this.http.get<any>("http://localhost:3000/Salary")
    .pipe(map((res:any)=>{
      return res;
    }))
   }


   updateEmploye(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/Salary/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
   }

   
   daleteEmploye(id:number){
    return this.http.delete<any>("http://localhost:3000/Salary/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
   }

  


}
