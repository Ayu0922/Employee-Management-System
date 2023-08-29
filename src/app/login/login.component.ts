
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup
changetype:boolean=true;
visible:boolean=true;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      uname:[''],
      password:['']
    })
  }
  logIn(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.uname === this.loginForm.value.uname && a.password === this.loginForm.value.password
      })
      if(user){
        alert("You Have Login Successfully !!!");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }
      else{
        alert("Login Failed !! Please Enter Valid Username & Password")
      }
    },err=>{
      alert("Restart Your JSON Server: records api!!!! ")
      console.log("Restart Your JSON Server or records api!!!!");
      
    })
  }
  viewpass(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }
 
}
