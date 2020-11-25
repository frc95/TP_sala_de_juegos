import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  emailPattern : string="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  registroForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)])
  });

  error : boolean = false;
  mensaje : string = "";

  constructor(private authSvc : AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  Registrar(form)
  {
    this.authSvc.AuthRegistrar(form).then(res =>{
      this.authSvc.AuthLogout();
      this.route.navigate(['']);
    }).catch(err => {

      
      this.error=true;
    
      if(err.code == "auth/email-already-in-use")
      {
        this.mensaje="Ese email ya esta registrado"; 
      }
      else if(err.code == "auth/invalid-email")
      {
        this.mensaje="Error en el email";
      }
      else if(err.code == "auth/weak-password")
      {
        this.mensaje="La contraseña debe ser con al menos 6 caracteres";
      }
      else
      {
        this.mensaje=err.message;
      }  
    });
  }

  Volver()
  {
    this.route.navigate(['']);
  }

}
