import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private auth : AngularFireAuth, private route : Router) { }


  ngOnInit(): void {
  }

  Login(form)
  {
    //console.log('Form', form.value.password);
    try{
      const rta = this.auth.signInWithEmailAndPassword(form.value.email,form.value.password);
      console.log(rta);
      this.route.navigate(['navigation']);
    }
    catch(error){
      console.log(error);
    
    }
  }
}
