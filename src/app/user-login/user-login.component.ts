import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userloginForm!:FormGroup
  changetype:boolean=true;
  visible:boolean=true;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.userloginForm=this.formBuilder.group({
      uname:[''],
      password:[''],
      name:['']
    })
  }
  logIn(){
    this.http.get<any>("http://localhost:3000/user-signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.uname === this.userloginForm.value.uname && a.password === this.userloginForm.value.password 
      })
      console.log(res)
      if(user){
        alert("You Have Login Successfully !!!");
        this.userloginForm.reset();
        console.log(this.userloginForm.value.name)
        this.router.navigate(['user-dashboard'])
      }
      else{
        alert("Login Failed !! Please Enter Valid Username & Password")
      }
    },err=>{
      alert("Restart Your JSON Server !!!! ")
    })
  }
  viewpass(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }
}
