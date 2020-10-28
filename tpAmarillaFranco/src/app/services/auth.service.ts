import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: Observable<firebase.User>;

  constructor(private auth : AngularFireAuth, private route : Router) { 
    this.userData=this.auth.authState;
    
  }

  AuthLogin(form)
  {
    try{
      const rta = this.auth.signInWithEmailAndPassword(form.value.email,form.value.password);
      console.log(rta);

      setTimeout(() => {
        this.route.navigate(['navigation']);
      }, 1000);
    }
    catch(error){
      console.log(error);
    
    }
  }

  AuthLogout()
  {
    this.auth.signOut();
  }
}
