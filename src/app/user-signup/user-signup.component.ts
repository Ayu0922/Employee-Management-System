import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  changetype:boolean=true;
  visible:boolean=true;
usersignupForm !:FormGroup
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.usersignupForm=this.formBuilder.group({
      name:[''],
      mobile:[''],
      email:[''],
      uname:[''],
      password:['']
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/user-signup",this.usersignupForm.value).subscribe(res=>{
      alert("You Have Register Successfully !!!!");
      console.log("usersignup :"+res)
      this.usersignupForm.reset();
      this.router.navigate(['user-login'])
    },err=>{
      console.log(err)
      alert("Please Fill Correct Information")
    })
    }
    viewpass(){
      this.visible=!this.visible;
      this.changetype=!this.changetype;
    }

}
