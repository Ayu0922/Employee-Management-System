
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
// import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
export class Employee {
  id : number=0;
  name :string='';
  email :string='';
  salary:number=0;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText:any;
  p:number=1;

  
empDetail !:FormGroup;
empObj : Employee =new Employee();
empList :Employee[]=[];
empData !:any;

title='Welcome To Admin Pannel'
 
  constructor(private formBuilder:FormBuilder,private empService: EmployeeService) { }

  ngOnInit(): void {
    
   
    this.getAllEmployee();
   
    
    this.empDetail=this.formBuilder.group({
      id:[''],
      name:[''],
      salary:[''],
      email:['']
    });
  }
  


  addEmployee(){
    console.log(this.empDetail);
    this.empObj.id=this.empDetail.value.id;
    this.empObj.name=this.empDetail.value.name;
    this.empObj.salary=this.empDetail.value.salary;
    this.empObj.email=this.empDetail.value.email;

    
  this.empService.postEmploye(this.empObj).subscribe(res=>{
    console.log(res);
    if(this.empDetail.value.name ==''||this.empDetail.value.name==null){
      alert("Name is required")
      this.empDetail.disable();
    }
    else if(this.empDetail.value.salary == ''||this.empDetail.value.salary==null){
      alert("Salary is required")
      this.empDetail.disable();
    }
    else if(this.empDetail.value.email==''||this.empDetail.value.email==null){
      alert("Email is required")
      this.empDetail.disable();
    }
    else{
      alert("Employee Added Successfully");
    }
   
    let ref=document.getElementById('cancel');
   ref?.click();
    this.empDetail.reset();
    this.getAllEmployee();
  },err=>{
    console.log(err);
  })
}


getAllEmployee() 
    {
    this.empService.getEmploye().subscribe(res=>{
      this.empList=res;
      console.log(res);
    },err=>{
      console.log(err)
      console.log("error while fetching data")
    });

  }
  deleteEmployee(employee:any){
    this.empService.daleteEmploye(employee.id)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Deleted");
      this.getAllEmployee();
    })
  }
//   getAllEmployee(){
// this.empService.getAllEmployee().subscribe(res=>{
//   this.empList=res;
// },err=>{
//   console.log("error while fetching data")
// });
//   }

  // editEmployee(emp:Employee){
  //   this.empDetail.controls['id'].setValue(emp.id);
  //   this.empDetail.controls['name'].setValue(emp.name);
  //   this.empDetail.controls['email'].setValue(emp.email);
  //   this.empDetail.controls['salary'].setValue(emp.salary);
  //   }

  editEmployee(employee:Employee){
    this.empObj.id=employee.id;
    this.empDetail.controls['id'].setValue(employee.id);
    this.empDetail.controls['name'].setValue(employee.name);
    this.empDetail.controls['email'].setValue(employee.email);
    this.empDetail.controls['salary'].setValue(employee.salary);
    }
    updateEmployee(){
      console.log(this.empDetail);
    this.empObj.id=this.empDetail.value.id;
    this.empObj.name=this.empDetail.value.name;
    this.empObj.salary=this.empDetail.value.salary;
    this.empObj.email=this.empDetail.value.email;
     
    this.empService.updateEmploye(this.empObj,this.empObj.id)
    .subscribe(res=>{
      alert("Updated Successfully")
      let ref=document.getElementById('cancel');
      ref?.click();
       this.empDetail.reset();
       this.getAllEmployee();
    })
    }
}


