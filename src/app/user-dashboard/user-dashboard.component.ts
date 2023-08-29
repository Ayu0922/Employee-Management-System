import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
// import { User } from '../userModel/user';
import{UserService}  from 'src/app/user.service';
export class User {
  id:number=0;
  CompanyName:string='';
     JobRole:string='';
     Qulification:string='';
     Location:string='';
     Salary:number=0;
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  empList :User[]=[];
  searchText:any;
  title='Welcome To User Pannel'
  constructor(private formBuilder:FormBuilder,private empService:UserService) { }

  ngOnInit(): void {
    this.getAllEmployee() ;
  }
  getAllEmployee() 
  {
  this.empService.getEmploye().subscribe(res=>{
    this.empList=res;
    console.log(res)
  },err=>{
    console.log("error while fetching data");
    console.log(err)
  });

}
}
