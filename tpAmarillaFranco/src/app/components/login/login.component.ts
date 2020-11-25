import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern : string="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  loginForm = new FormGroup({
    email: new FormControl('ramon@ram.com', [Validators.required,Validators.minLength(3),Validators.pattern(this.emailPattern)]),
    password: new FormControl('ramon123',  [Validators.required,Validators.minLength(3)])
  });

  error : boolean = false;
  mensaje : string = "";

  constructor(private authSvc : AuthService, private route: Router) { }


  ngOnInit(): void {
  }

  Login(form)
  {
    this.authSvc.AuthLogin(form).then(res =>{
      this.route.navigate(['navigation']);
    }).catch(err => {

      this.error=true;
    
      if(err.code == "auth/wrong-password")
      {
        this.mensaje="Error en la contraseña"; 
      }
      else if(err.code == "auth/user-not-found")
      {
        this.mensaje="El usuario no existe";
      }
      else if(err.code == "auth/invalid-email")
      {
        this.mensaje="Error en el email";
      }
      else
      {
        this.mensaje=err.message;
      }  
    });
  }

  IrRegistro()
  {
    this.route.navigate(['registro']);
  }
}
