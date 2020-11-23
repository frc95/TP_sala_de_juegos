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

  loginForm = new FormGroup({
    email: new FormControl('juan@juan.com', Validators.required),
    password: new FormControl('juan123', Validators.required)
  });

  constructor(private authSvc : AuthService, private route: Router) { }


  ngOnInit(): void {
  }

  Login(form)
  {
    this.authSvc.AuthLogin(form);
  }

  IrRegistro()
  {
    this.route.navigate(['registro']);
  }
}
