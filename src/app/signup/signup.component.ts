import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  changetype:boolean=true;
  visible:boolean=true;
signupForm !:FormGroup

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:['',Validators.required],
      city:['',Validators.required],
      mobile:['',Validators.required],
      email:['',Validators.required,Validators.email],
      uname:['',Validators.required],
      password:['',Validators.required],

      
    })
  }
signUp(){
this.http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
  alert("You Have Register Successfully !!!!");

  console.log(res)
  this.signupForm.reset();
  this.router.navigate(['login'])
},err=>{
  alert("Please Fill Correct Information")
})
}
viewpass(){
  this.visible=!this.visible;
  this.changetype=!this.changetype;
}
}
