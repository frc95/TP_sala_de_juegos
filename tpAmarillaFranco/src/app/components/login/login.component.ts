import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('admin@admin.com', Validators.required),
    password: new FormControl('admin123', Validators.required)
  });

  constructor(private authSvc : AuthService) { }


  ngOnInit(): void {
  }

  Login(form)
  {
    this.authSvc.AuthLogin(form);
  }
}
